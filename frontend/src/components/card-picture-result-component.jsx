import { useState } from "react";
import "../styles/card-picture-styles.css"
import Image from "next/image";
import '../styles/homepage-styles.css'
import ImagePicker from "./image-picker-component";
import LoadingSpinner from "./loading-spinner-component";
const CardPictureResult = ({title, icon, widthPercent="49.5%", yourImage, id})=>{
    const [hidden, setHidden] = useState(true)
    const toggleModal = ()=> { setHidden(!hidden);}
    const myLoader=({src})=>{
        return src;
      }
    return (
        <div className="card-picture border-[0.15vw] rounded-md flex flex-col" style={{width:widthPercent}}>
            <div className="header w-full h-[10%] border-b-[0.15vw] flex flex-col justify-center flex-none">
                <div className="flex flex-row justify-between px-[3%]">
                    <div className="font-medium text-[1.2vw]">
                        {title}
                    </div>
                    <button>
                        <Image
                            
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
            <div className="flex flex-col justify-center h-[90%] relative w-full ">
                <div className="flex flex-row justify-center ">
                    {
                        yourImage?
                        <Image
                            loader={myLoader}
                            id={id}
                            src={yourImage}
                            alt="Your Image"
                            layout='fill'
                            objectFit='contain'
                            className="p-[2%]"
                            priority
                        />
                        :
                        <LoadingSpinner/>
                    }
                    
                </div>
            </div>
            <div className={"fixed z-10 overflow-y-auto top-[10%] w-full left-0 " + (hidden?"hidden":"")} id="modal">
                <div className="flex items-center justify-center ">
                    <div className="inline-block w-[50%] align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <ImagePicker isModal={true} onClose={toggleModal}/>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardPictureResult;