'use client'
import Title from "@/components/title-component";
import CardPicture from "@/components/card-picture-component";
import MetaData from "@/components/meta-data-component";
import { useAppContext } from "@/components/context-component";
const InformationPage = () => {
    const {globalImage, setGlobalImage} = useAppContext()
    return (
        <div className="flex flex-col p-[1.5%] h-full" >
            <Title title={"Metadata Analysis"} icon="/Information.svg" className="flex-none" />
            <div className="result_area flex flex-col grow justify-around">
                <div className="description-block flex-none h-fit text-[1vw]">
                    An informative picture is also a trustworthy one!
                </div>
                <div className="flex flex-row justify-center h-[80%] w-full">
                    <div className="flex flex-row justify-between w-[100%] ">
                        <CardPicture title="Your picture" icon="/ChangePicture.svg" widthPercent="40%" yourImage={globalImage}/>
                        <MetaData url={globalImage} title="Metadata" icon="/ChangePicture.svg" widthPercent="59%"/>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}
export default InformationPage;