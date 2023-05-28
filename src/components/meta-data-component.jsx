import "../styles/card-picture-styles.css"
import Image from "next/image";
const MetaDataSection = ({title, components})=>{
    return (
        <div className="rounded-md flex flex-col w-full m-[2vh]" >
            <div className="header w-full border-b-[0.15vw] flex flex-col justify-center flex-none">
                <div className="flex flex-row justify-between">
                    <div className="font-medium text-[1.1vw]">
                        {title}
                    </div>
                   
                </div>
            </div>
            <div className="flex flex-col justify-center py-[1.5%]">
                {
                    components.map((component)=>{
                        return (
                            <div key = {component.key} className="flex flex-row justify-start px-[7%]">
                                <div className="w-[35%] text-[0.9vw]">{component.key}</div>
                                <div className="w-[60%] ml-[5%] text-[0.9vw] low-light-text">{component.value}</div>
                            </div>
                        )
                    })
                }
             
            </div>
            
        </div>
    )
}
const MetaData = ({title, icon, widthPercent="49.5%"})=>{
    const arr = [
        {
            title: "File",
            components:[
                {
                    key: "File size",
                    value: "1351 KB"
                },
                {
                    key: "File Modification Date/Time",
                    value:	"2022:07:07 09:16:16+00:00"
                },
                {
                    key: "File Type",
                    value:	"JPEG"
                }
            ]
        },
        {
            title: "EXIF",
            components:[
                {
                    key: "Image Width",
                    value: "3264"
                },
                {
                    key: "Image Height",
                    value:	"Image Height"
                },
                {
                    key: "Bits Per Sample",
                    value:	"888"
                },
                {
                    key: "Photometric Interpretation",
                    value:	"RGB"
                }
            ]
        },
        ,
        {
            title: "EXIF",
            components:[
              
            ]
        },
        ,
        {
            title: "EXIF",
            components:[
                {
                    key: "Image Width",
                    value: "3264"
                },
                {
                    key: "Image Height",
                    value:	"Image Height"
                },
                {
                    key: "Bits Per Sample",
                    value:	"888"
                },
                {
                    key: "Photometric Interpretation",
                    value:	"RGB"
                }
            ]
        },
    ]
    return (
        <div className="card-picture border-[0.15vw] rounded-md flex flex-col" style={{width:widthPercent}}>
            <div className="header w-full h-[10%] border-b-[0.15vw] flex flex-col justify-center flex-none">
                <div className="flex flex-row justify-between px-[3%]">
                    <div className="font-medium text-[1.2vw]">
                        {title}
                    </div>
                  
                </div>
            </div>
            <div className="flex flex-col justify-center h-[90%] ">
                <div className="flex flex-row justify-center h-full p-[2%]">
                    <div class="overflow-y-scroll w-full h-[53vh] pr-[5%] scrollbar">
                        {
                            arr.map((val) => {
                                return (<MetaDataSection title={val.title} key={val.title} components={val.components}/>);
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default MetaData;