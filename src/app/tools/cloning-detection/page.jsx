'use client';
import Title from "@/components/title-component";
import Image from "next/image";
import CardPicture from "@/components/card-picture-component";
import { useAppContext } from "@/components/context-component";
import { useEffect, useState } from "react";
import CardPictureResult from "@/components/card-picture-result-component";
const CloningDetectionPage = () => {
    
    const {globalImage, setGlobalImage, cloningDetectionResultUrl, setCloningDetectionResultUrl,
        changeImageTrigger, setChangeImageTrigger} = useAppContext()
    useEffect(()=>{
        const copyMoveDetection = async () => {
            console.log("call")
            const blob  = await fetch(globalImage).then(r => r.blob());
            const formData = new FormData();
              formData.append('image', blob, 'image.jpg');
      
              const requestOptions = {
                method: 'POST',
                body: formData,
              };
              fetch('https://www.fotoverifier.eu/api/copy-move', requestOptions)
            .then((response) => response.blob())
            .then((blob) => {
                
                var url = URL.createObjectURL(blob);
                setCloningDetectionResultUrl(url);
            }).catch(e=>console.log(e));
          };
          copyMoveDetection();
            
    },[globalImage])
    return (
        <div className="flex flex-col p-[1.5%] h-full" >
            <Title title={"Cloning Detection"} icon="/CloningDetection.svg" className="flex-none" />
            <div className="result_area flex flex-col grow justify-around">
                <div className="description-block flex-none h-fit text-[1vw]">
                    This tool can show <span className="text-red-600">copied areas</span> in an image even if they have been edited after pasting, such as rotation or resizing or change color.
                </div>
                <div className="flex flex-row justify-center h-[80%] w-full">
                    <div className="flex flex-row justify-between w-[100%] ">
                        <CardPicture yourImage={globalImage} title="Your picture" icon="/ChangePicture.svg"/>
                        <CardPictureResult yourImage={cloningDetectionResultUrl} title="Result" icon="/Question.svg"/>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}
export default CloningDetectionPage;