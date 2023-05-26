import Title from "@/components/title-component";
import Image from "next/image";
import CardPicture from "@/components/card-picture-component";
const CloningDetectionPage = () => {
    return (
        <div className="flex flex-col p-10 h-full" >
            <Title title={"Cloning Detection"} icon="/CloningDetection.svg" className="flex-none" />
            <div className="result_area flex flex-col relative  grow">
                <div className="description-block flex-none h-fit">
                    This tool can show <span className="text-red-600">copied areas</span> in an image even if they have been edited after pasting, such as rotation or resizing or change color.
                </div>
                <div className="absolute bottom-0 flex flex-row justify-center h-[500px] w-full">
                    <div className="flex flex-row justify-between w-[100%] ">
                        <CardPicture title="Your picture"/>
                        <CardPicture title="Result"/>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}
export default CloningDetectionPage;