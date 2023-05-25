"use client";
import Title from "@/components/title-component";
import Image from "next/image";
import { useState } from "react";
import RangeSlider from "@/components/slider-component";

const ImageSplicingDetectionPage = () => {
    const [percent, setPercent] = useState([0, 100]);
    const onChangeRange = (event)=>{
        console.log("left-[" + percent + "%] ")
        setPercent(event.target.value)
    }
    return (
        <div className="flex flex-col h-screen p-5" >
            <Title title={"Image Splicing Detection"} icon = "/SplicingDetection.svg" className="flex-none" />
            <div className="result_area grow pt-1">
                <div>
                    This tool can detect spliced images using two techniques: <span className="text-cyan-400">JPEG Ghost</span> and <span className="text-cyan-400">Color Filter Array Detection</span>
                </div>
                
                <div className="absolute top-[35%] w-11/12 flex flex-row justify-center">
                    <div className="flex flex-row justify-around w-full ">
                        <div>
                            <Image
                                src="/Sample.png"
                                alt="/Sample.png"
                                width={500}
                                className="w-[200px] md:w-[300px] lg:w-[400px]"
                                height={24}
                                priority
                            />
                            <div className="flex justify-center text-2xl font-bold mt-5">Your picture</div>
                        </div>
                        <div>
                            <Image
                                src="/Sample.png"
                                alt="/Sample.png"
                                width={500}
                                height={24}
                                className="w-[200px] md:w-[200px] lg:w-[400px]"
                                priority
                            />
                            <div className="flex justify-center text-2xl font-semibold  mt-5">Result</div>
                        </div>
                        <div className="tab-popup relative w-[350px] h-[350px] md:w-[150px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-lg ">
                            <div className="absolute top-0 h-[50px] flex">
                                <div className="tab-header active rounded-tl-lg w-[150px] p-3 flex justify-center border-r-2 border-b-2 font-bold ">
                                    JPEG Ghost
                                </div>
                                <div className="tab-header  rounded-tr-lg w-[200px]  p-3 flex justify-center border-l-1 border-b-2 font-bold">
                                    Color Filter Array
                                </div>
                            </div>
                            <div className="absolute top-[50px] p-7 flex flex-col justify-between h-[300px]">
                                <div className="font-bold">
                                    Detect splicing image based on different level of quantization in compression JPEG images
                                </div>
                                 <RangeSlider className="single-thumb"
                                    id="slider"
                                    defaultValue={[0, 100]}
                                    thumbsDisabled={[true, false]}
                                    rangeSlideDisabled={true}
                                    percent = {percent[1]}  
                                    value={percent}
                                    onInput={setPercent}>
                                    
                                    </RangeSlider> 

                                    
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default ImageSplicingDetectionPage;