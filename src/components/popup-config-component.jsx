'use client';
import JPEGGhost from "@/utils/methods/JPEGGhost"
import onLoadCFA from "@/utils/methods/CFA";
import NextImage from "next/image"
import JPEGGhostHandler from "./JPEG-ghost-handler-component"
import Link from "next/link"
import { useAppContext } from "./context-component";
import CFAHandler from "./CFA-handler-component";
import { useEffect } from "react";

const PopupConfig = ({tabName, setLoadResult})=>{
    const {isOpenedPopup, setIsOpenedPopup, } = useAppContext()
    const jpegGhostOnChangeSlider = async(jpegQuality, url)=>{
        
        JPEGGhost(jpegQuality,url);
    }
    const getComponentByTabTabName = ()=>{
        if (tabName === 'jpeg-ghost'){
            return(
                <JPEGGhostHandler onChange={jpegGhostOnChangeSlider}/>
            )
        }
        if (tabName === 'color-filter-array'){
            return(
                <CFAHandler setLoadResult={setLoadResult} />
            )
        }
        return null;
    }
    
    return (
        
            isOpenedPopup?
            <div className="w-[25%] h-[60%] flex flex-row">
                <div className="flex flex-col justify-center w-[5%] h-full">
                    <button 
                        className="open-close-btn w-full h-[9vh] flex flex-col justify-center rounded-l-lg pl-[30%]"
                        onClick={()=>setIsOpenedPopup(false)}>
                        <div className="flex flex-row justify-center w-full ">
                            <NextImage
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
                        <Link href='/tools/image-splicing-detection/jpeg-ghost' className={"tab-header rounded-tl-lg w-[40%] flex justify-center border-r-[0.15vw] border-b-[0.15vw] " +(tabName==='jpeg-ghost' ? '': " inactive ")}
                     >
                            <div className="flex flex-col justify-center font-bold text-[1vw]">
                                JPEG Ghost
                            </div>
                        </Link>
                        <Link href='/tools/image-splicing-detection/color-filter-array' className={"tab-header rounded-tr-lg w-[60%] flex justify-center border-l-1 border-b-[0.15vw] " +(tabName==='color-filter-array' ? '': " inactive ")}
                        >
                            <div className="flex flex-col justify-center font-bold text-[1vw]">
                                Color Filter Array
                            </div>
                            
                        </Link>
                    </div>
                    
                    {
                        getComponentByTabTabName()
                    }
                    
                </div>
            </div>
            :
            <div className="flex flex-col justify-center w-[1%] h-full right-0 top-[-1.5%] fixed ">
                <button 
                    className="open-close-btn w-full h-[9vh] flex flex-col justify-center rounded-l-lg"
                    onClick={()=>setIsOpenedPopup(true)}>
                    <div className="flex flex-row justify-center w-full ">
                        <NextImage
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
        
    )
}
export default PopupConfig;