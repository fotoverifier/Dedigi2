"use client";
import "../styles/card-picture-styles.css"
import Image from "next/image";
import { getExifMetadata, getGeoTags } from "@/utils/image";
import { useEffect, useState } from "react";
const MetaDataSection = ({title, components})=>{
    const removeQuotes = (text)=>{
        return text.substring(1, text.length-1)
    }
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
                                <div className="w-[60%] ml-[5%] text-[0.9vw] low-light-text">
                                    {typeof component.value === typeof 123?component.value:removeQuotes(JSON.stringify(component.value))}
                                </div>
                            </div>
                        )
                    })
                }
             
            </div>
            
        </div>
    )
}
const MetaData = ({url, title, icon, widthPercent="49.5%"})=>{
    const [arr,setArr] = useState([]);
    
    useEffect(()=>{
        const loadMetadata = async() =>{
            if (url){
                const newArr = []
                const exifMetadata = await getExifMetadata(url);
                const obj = {title:"EXIF", components:[]}
                for (let key in exifMetadata) {
                    obj.components.push({ key: key, value: exifMetadata[key] });
                }
                
                const getGeoTagsMetadata = await getGeoTags(url);
                const obj2 = {title:"Geo Tags", components:[]}
                for (let key in getGeoTagsMetadata) {
                    obj2.components.push({ key: key, value: getGeoTagsMetadata[key] });
                }
                newArr.push(obj)
                newArr.push(obj2)
                setArr(newArr)
            }
        }
        loadMetadata();
    },[url])
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
                    <div className="overflow-y-scroll w-full h-[53vh] pr-[5%] scrollbar">
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