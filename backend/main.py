from fastapi import FastAPI, File, UploadFile, Form
from typing import Annotated
from fastapi.responses import JSONResponse
from pathvalidate import sanitize_filepath
from PIL import Image
import io
import uvicorn
import cv2
import numpy as np
from hashlib import md5, sha256
import os
# from flask_cors import CORS
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI() # gọi constructor và gán vào biến app

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/api/static", StaticFiles(directory="static"), name="static")
def jpeg_ghost(img, quality):
    smoothing_b = 17
    offset = (smoothing_b-1)//2

    height, width, _ = img.shape

    encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), quality]
    _, encoded_img = cv2.imencode('.jpg', img, encode_param)

    img_low = cv2.imdecode(encoded_img, cv2.IMREAD_COLOR)

    tmp = (img-img_low)**2

    tmp = cv2.blur(tmp, (smoothing_b, smoothing_b))

    tmp = np.average(tmp, axis=-1)

    tmp = tmp[offset:height-offset, offset:width-offset]

    normalized = (tmp - tmp.min()) / (tmp.max() - tmp.min())
    normalized = (normalized * 255).astype(np.uint8)  # Scale it back to 8-bit

    return normalized


@app.post("/api/store-and-process-image")
async def store_and_process(file: Annotated[UploadFile, File()], quality: Annotated[int, Form()]):
    try:
        print(quality)
        image = await file.read()
        img = Image.open(io.BytesIO(image)).convert('RGB')
        path_saved = f"static/Image/{sha256(image).hexdigest()}.jpg"
        response = {}
        if os.path.exists(path_saved):
            response.update({"message": "Image already uploaded"})
        else:
            img.save(path_saved, "JPEG")
        response.update({"path_saved": path_saved})
        img_np = np.array(img, np.uint8)
        result = Image.fromarray(jpeg_ghost(img_np, quality))
        processed_path_saved = f"static/ProcessedImage/{sha256(image + quality.to_bytes(1, 'big')).hexdigest()}.jpg"
        result.save(processed_path_saved, "JPEG")

        response.update({"result_path": processed_path_saved})
        print(response)
        return JSONResponse(response)
    except Exception as e:
        return JSONResponse({"error": str(e)})


@app.post("/api/process-only-image")
async def process_only(file_name: Annotated[str, Form()], quality: Annotated[int, Form()]):
    try:
        if not os.path.exists(f"{file_name}"):
            return JSONResponse({"message": "Image doesn't exists."})
        image = io.BytesIO()
        img = Image.open(f"{file_name}").convert('RGB')
        img.save(image, format='JPEG')
        
        response = {}
        response.update({"fetched_image": "success"})
        
        img_np = np.array(img, np.uint8)
        result = Image.fromarray(jpeg_ghost(img_np, quality))
        processed_path_saved = f"static/ProcessedImage/{sha256(image.getvalue() + quality.to_bytes(1, 'big')).hexdigest()}.jpg"
        result.save(processed_path_saved, "JPEG")

        response.update({"result_path": processed_path_saved})

        return JSONResponse(response)
    except Exception as e:
        return JSONResponse({"error": str(e)})



if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
