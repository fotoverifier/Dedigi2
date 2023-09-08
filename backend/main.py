from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from PIL import Image
import io
import uvicorn
import cv2
import numpy as np
from hashlib import md5
import os
app = FastAPI() # gọi constructor và gán vào biến app


@app.get("/") # giống flask, khai báo phương thức get và url
async def root(): # do dùng ASGI nên ở đây thêm async, nếu bên thứ 3 không hỗ trợ thì bỏ async đi
    return {"message": "Hello World"}

@app.get("/testing/normal_test") # giống flask, khai báo phương thức get và url
async def foo1(): # do dùng ASGI nên ở đây thêm async, nếu bên thứ 3 không hỗ trợ thì bỏ async đi
    return {"message": f"This is just a normal test"}

@app.get("/testing/{test_here:path}") # giống flask, khai báo phương thức get và url
async def foo2(test_here: str): # do dùng ASGI nên ở đây thêm async, nếu bên thứ 3 không hỗ trợ thì bỏ async đi
    return {"message": f"This is different {test_here}"}


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

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...), quality: int = 60):
    try:
        image = await file.read()
        img = Image.open(io.BytesIO(image)).convert('RGB')
        path_saved = f"Image/{md5(image + quality.to_bytes(1, 'big')).hexdigest()}.jpg"
        
        if os.path.exists(path_saved):
            return JSONResponse({"message": "Image already uploaded with same quality", "image_path": path_saved})
        
        img_np = np.array(img, np.uint8)
        
        
        result = Image.fromarray(jpeg_ghost(img_np, quality))
        
        
        result.save(path_saved, "JPEG")
        
        return JSONResponse({"message": "Image uploaded successfully", "image_path": path_saved})
    except Exception as e:
        return JSONResponse({"error": str(e)})


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
