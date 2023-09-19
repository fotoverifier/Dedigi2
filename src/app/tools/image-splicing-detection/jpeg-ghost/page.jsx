'use client';
import CardPicture from "@/components/card-picture-component"
import CardPictureCanvas from "@/components/card-picture-canvas-component"
import { useAppContext } from "@/components/context-component";
import { useState } from "react";
import PopupConfig from "@/components/popup-config-component";
import CardPictureResult from "@/components/card-picture-result-component";
const JPEGGhostPage = ()=>{
    const [loadResult, setLoadResult] = useState(false)
    const { globalImage, isOpenedPopup, setCurrentSplicingTool, JPEGGhostResultUrl} = useAppContext();
    setCurrentSplicingTool('jpeg-ghost')
    return (
        <div className="flex flex-row justify-between w-full ">
            <CardPicture id="originalImage" yourImage={globalImage} title="Your picture" widthPercent={isOpenedPopup?"37%" : "49.5%"} icon="/ChangePicture.svg"/>
            <CardPictureResult picId="resultCanvasCFA"  yourImage={JPEGGhostResultUrl} title="Result" widthPercent={isOpenedPopup?"37%" : "49.5%"} icon="/Question.svg"/>
            {/* <CardPictureCanvas loadResult={loadResult} picId="resultCanvas"  yourImage={globalImage} title="Result" widthPercent={isOpenedPopup?"37%" : "49.5%"} icon="/Question.svg"/> */}
                <PopupConfig tabName={'jpeg-ghost'}/>
            
        </div>
    )
}
export default JPEGGhostPage;