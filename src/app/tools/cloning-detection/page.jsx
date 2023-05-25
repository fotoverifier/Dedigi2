import Title from "@/components/title-component";
import Image from "next/image";
const CloningDetectionPage = () => {
    return (
        <div className="flex flex-col h-screen p-5" >
            <Title title={"Cloning Detection"} icon="/CloningDetection.svg" className="flex-none" />
            <div className="result_area grow pt-1">
                <div>
                    This tool can show <span className="text-red-600">copied areas</span> in an image even if they have been edited after pasting, such as rotation or resizing or change color.
                </div>
                <div className="absolute bottom-20 w-11/12 flex flex-row justify-center">
                    <div className="flex flex-row justify-around w-full ">
                        <div>
                            <Image
                                src="/Sample.png"
                                alt="/Sample.png"
                                width={500}
                                className="w-[200px] md:w-[300px] lg:w-[500px]"
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
                                className="w-[500px] md:w-[200px] lg:w-[500px]"
                                priority
                            />
                            <div className="flex justify-center text-2xl font-semibold  mt-5">Result</div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}
export default CloningDetectionPage;