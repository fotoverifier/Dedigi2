'use-client';
import { useAppContext } from "./context-component";
import RangeSlider from "./slider-component"
import { useState, useEffect } from "react";
const JPEGGhostHandler = ({onChange})=>{
    const {jpegQuality, setJpegQuality, globalImage, changeImageTrigger, setChangeImageTrigger} = useAppContext();
    var currentVal = jpegQuality[1];
    
    
    const onChangeInput = (val)=>{
        setJpegQuality(val);
        currentVal = val[1];
    }

    const onMouseUp = ()=>{
        console.log('up')
        if (globalImage){
            onChange(currentVal/100,globalImage);
        }
    }
    document.body.onmouseup = onMouseUp;
    useEffect(()=>{
        if (globalImage){
            onChange(jpegQuality[1]/100,globalImage);
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