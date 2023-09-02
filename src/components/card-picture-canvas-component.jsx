'use client';
import "../styles/card-picture-styles.css"
import NextImage from "next/image";
import '../styles/homepage-styles.css'
import { useEffect, useState } from "react";
import LoadingSpinner from "./loading-spinner-component";
const CardPictureCanvas = ({title, icon, widthPercent="49.5%", picId, yourImage, loadResult})=>{
    const [resultUrl, setResultUrl] = useState("")
    return (
        <div className="card-picture border-[0.15vw] rounded-md flex flex-col " style={{width:widthPercent}} >
             
            <div className="header w-full h-[10%] border-b-[0.15vw] flex flex-col justify-center flex-none">
                <div className="flex flex-row justify-between px-[3%]">
                    <div className="font-medium text-[1.2vw]">
                        {title}
                    </div>
                    <button >
                        <NextImage
                            
                            src={icon}
                            alt={icon}
                            className='w-[1.5vw]'
                            width={25}
                            height={2}
                            priority
                        />
                    </button>
                    
                </div>
            </div>
            <div className="flex flex-col justify-center h-[90%] relative ">
                <div className="flex flex-row justify-center h-full w-full">
                    {
                        loadResult?
                        <div className="flex flex-col justify-center">
                            <LoadingSpinner/>
                        </div>

                            
                        :
                        null
                    }
                    {
                        <canvas className="p-[2%]" style={{height: loadResult?'1%':'100%', width: loadResult?'1%':'100%', objectFit: 'contain',
                        position: 'absolute',  inset: 0}} id={picId} />
                    }
                    
                </div>
            </div>
            
        </div>
    )
}
export default CardPictureCanvas;