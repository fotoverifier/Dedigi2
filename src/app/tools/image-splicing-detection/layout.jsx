"use client";
import Title from "@/components/title-component";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import CardPicture from "@/components/card-picture-component";
import RangeSlider from "@/components/slider-component";
import { useAppContext } from "@/components/context-component"
import JPEGGhost from "@/utils/methods/JPEGGhost";
import CardPictureCanvas from "@/components/card-picture-canvas-component";
import JPEGGhostHandler from "@/components/JPEG-ghost-handler-component";
import CFAHandler from "@/components/CFA-handler-component";
const ImageSplicingDetectionLayout = ({children}) => {
    return (
      
        <div className="flex flex-col p-[1.5%] h-full" >
            <Title title={"Image Splicing Detection"} icon = "/SplicingDetection.svg" className="flex-none" />
            <div className="result_area flex flex-col grow justify-around">
                <div className="description-block flex-none h-fit text-[1vw]">
                    This tool can detect spliced images using two techniques: <span className="text-cyan-400">JPEG Ghost</span> and <span className="text-cyan-400">Color Filter Array Detection</span>
                </div>
                
                <div className="flex flex-row justify-center h-[80%] w-full relative">
                {children}

                </div>
            </div>
            
        </div>
    )
}
export default ImageSplicingDetectionLayout;