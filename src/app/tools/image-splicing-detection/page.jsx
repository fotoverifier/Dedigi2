"use client";
import Title from "@/components/title-component";
import Image from "next/image";
import { useState } from "react";
import CardPicture from "@/components/card-picture-component";
import RangeSlider from "@/components/slider-component";
import { useAppContext } from "@/components/context-component";
const ImageSplicingDetectionPage = () => {
    const [jpegQuality, setJpegQuality] = useState([0, 100]);
    const [isOpenedPopup, setIsOpenedPopup] = useState(true);
    const [thresholdPercent, setThresholdPercent] = useState([0, 100]);
    const [tabId, setTabId] = useState(0)
    const {globalImage, setGlobalImage} = useAppContext()
    return (
      
        <div className="flex flex-col p-[1.5%] h-full" >
            <Title title={"Image Splicing Detection"} icon = "/SplicingDetection.svg" className="flex-none" />
            <div className="result_area flex flex-col grow justify-around">
                <div className="description-block flex-none h-fit text-[1vw]">
                    This tool can detect spliced images using two techniques: <span className="text-cyan-400">JPEG Ghost</span> and <span className="text-cyan-400">Color Filter Array Detection</span>
                </div>
                
                <div className="flex flex-row justify-center h-[80%] w-full relative">
                    <div className="flex flex-row justify-between w-full ">
                        <CardPicture yourImage={globalImage} title="Your picture" widthPercent={isOpenedPopup?"37%" : "49.5%"} icon="/ChangePicture.svg"/>
                        <CardPicture yourImage={globalImage} title="Result" widthPercent={isOpenedPopup?"37%" : "49.5%"} icon="/Question.svg"/>
                        {
                            isOpenedPopup?
                            <div className="w-[25%] h-[60%] flex flex-row">
                                <div className="flex flex-col justify-center w-[5%] h-full">
                                    <button 
                                        className="open-close-btn w-full h-[9vh] flex flex-col justify-center rounded-l-lg pl-[30%]"
                                        onClick={()=>setIsOpenedPopup(false)}>
                                        <div className="flex flex-row justify-center w-full ">
                                            <Image
                                                src="/ArrowRight.svg"
                                                alt="/ArrowRight.svg"
                                                width={60}
                                                height={24}
                                                className="w-[60%]"
                                                priority
                                            />
                                        </div>
                                        
                                    </button>
                                </div>
                                
                                <div className="tab-popup flex flex-col w-full rounded-lg relative">
                                    <div className="h-[17%] flex-none flex">
                                        <div className={"tab-header rounded-tl-lg w-[40%] flex justify-center border-r-[0.15vw] border-b-[0.15vw] " + (tabId === 0 ? "" : " inactive ")}
                                        onClick={()=>setTabId(0)}>
                                            <div className="flex flex-col justify-center font-bold text-[1vw]">
                                                JPEG Ghost
                                            </div>
                                        </div>
                                        <div className={"tab-header rounded-tr-lg w-[60%] flex justify-center border-l-1 border-b-[0.15vw] " + (tabId === 1 ? "" : " inactive ")}
                                        onClick={()=>setTabId(1)}>
                                            <div className="flex flex-col justify-center font-bold text-[1vw]">
                                                Color Filter Array
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {
                                        tabId === 0?
                                            <div className=" flex flex-col justify-between grow p-[7%]">
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
                                                        onInput={setJpegQuality}>
                                                        
                                                        </RangeSlider> 
                                                </div>
                                            </div>
                                        :
                                            <div className=" flex flex-col justify-between grow p-[7%]">
                                                <div className="font-bold text-[1vw]">
                                                    Detect spliced images based on the differences between several areas of the Color Filter Array
                                                </div>
                                                <div>
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
                                                </div>
                                            </div>
                                    }
                                    
                                    
                                </div>
                            </div>
                            :
                            <div className="flex flex-col justify-center w-[1%] h-full right-0 top-[-1.5%] fixed ">
                                <button 
                                    className="open-close-btn w-full h-[9vh] flex flex-col justify-center rounded-l-lg"
                                    onClick={()=>setIsOpenedPopup(true)}>
                                    <div className="flex flex-row justify-center w-full ">
                                        <Image
                                            src="/ArrowLeft.svg"
                                            alt="/ArrowLeft.svg"
                                            width={60}
                                            height={24}
                                            className="w-[40%]"
                                            priority
                                        />
                                    </div>
                                    
                                </button>
                            </div>
                        }
                        
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default ImageSplicingDetectionPage;