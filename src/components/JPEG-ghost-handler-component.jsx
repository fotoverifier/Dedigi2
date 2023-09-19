'use-client';
import { useAppContext } from "./context-component";
import RangeSlider from "./slider-component"
import { useState, useEffect } from "react";
const JPEGGhostHandler = ({onChange})=>{
    const {jpegQuality, setJpegQuality, globalImage, changeImageTrigger, setChangeImageTrigger, JPEGGhostResultUrl, setJPEGGhostResultUrl} = useAppContext();
    var currentVal = jpegQuality[1];
    const JPEGGhost = async () =>{
        const blob  = await fetch(globalImage).then(r => r.blob());
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');
        formData.append('quality', "70");
        const requestOptions = {
            method: 'POST',
            body: formData,
        };
        console.log("post")
        fetch('http://localhost:8000/upload-image/', requestOptions)
        .then((response) => response.blob())
        .then((blob) => {
            var url = URL.createObjectURL(blob);
            console.log(blob)
            setJPEGGhostResultUrl(url)
        }).catch(e=>console.log(e));
    }
    const onLoadJPEGGhost=()=>{
        if (changeImageTrigger === true){
            setChangeImageTrigger(false)
            JPEGGhost();
        }
       
    }
    
    const onChangeInput = (val)=>{
        setJpegQuality(val);
        currentVal = val[1];
    }

    const onMouseUp = ()=>{
        console.log('up')
        if (globalImage){
           // onChange(currentVal/100,globalImage);
        }
    }
    document.body.onmouseup = onMouseUp;
    useEffect(()=>{
        if (globalImage){
            //onChange(jpegQuality[1]/100,globalImage);
            onLoadJPEGGhost();
        }
        return () => {
            console.log("counter unmounted");
            document.body.onmouseup = null;
          };    
        
    },[globalImage])
    return(
        <div id="jpegghost" className=" flex flex-col justify-between grow p-[7%]">
            <div className="font-bold text-[1vw]">
                Detect splicing image based on different level of quantization in compression JPEG images
            </div>
            <div>
                <div className="font-bold text-[0.8vw] mb-[3%]">
                    JPEG Quality
                </div>
                <RangeSlider className="single-thumb"
                    id="slider"
                    defaultValue={[0, 100]}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                    percent = {jpegQuality[1] +"%"}  
                    value={jpegQuality}
                    onInput={ onChangeInput}>
                    
                    </RangeSlider> 
            </div>
        </div>
    )
}
export default JPEGGhostHandler