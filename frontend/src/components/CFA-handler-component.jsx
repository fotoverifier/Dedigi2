'use-client';
import { useAppContext } from "./context-component";
import { useState, useEffect } from "react";

const CFAHandler = ({})=>{
    const {CFAResultUrl, setCFAResultUrl, globalImage, changeImageTrigger,setChangeImageTrigger} = useAppContext();
    const CFA = async () =>{
        const blob  = await fetch(globalImage).then(r => r.blob());
        const formData = new FormData();
        formData.append('image', blob, 'image.jpg');
    
        const requestOptions = {
            method: 'POST',
            body: formData,
        };
        fetch('https://dedigi.fotoverifier.eu/api/cfa', requestOptions)
        .then((response) => response.blob())
        .then((blob) => {
            var url = URL.createObjectURL(blob);
            
            setCFAResultUrl(url)
        }).catch(e=>console.log(e));
    }
    const onLoadCFA=()=>{
        if (changeImageTrigger === true){
            setChangeImageTrigger(false)
            CFA();
        }
       
    }
    useEffect(()=>{
        
        onLoadCFA();
    },[changeImageTrigger])
    return(
        <div className=" flex flex-col justify-between grow p-[7%]">
            <div className="font-bold text-[1vw]">
                Detect spliced images based on the differences between several areas of the Color Filter Array
            </div>
            {/* <div>
                <div className="font-bold text-[0.8vw] mb-[3%]">
                    Detection threshold
                </div>
                <RangeSlider className="single-thumb"
                    id="slider"
                    defaultValue={[0, 100]}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                    percent = {thresholdPercent[1]/100}  
                    value={thresholdPercent}
                    onInput={setThresholdPercent}>
                    
                    </RangeSlider> 
            </div> */}
        </div>
    )
}
export default CFAHandler;