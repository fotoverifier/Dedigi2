import { useState } from "react";
import "../styles/card-picture-styles.css"
import Image from "next/image";
import '../styles/homepage-styles.css'
import ImagePicker from "./image-picker-component";
const CardPicture = ({title, icon, widthPercent="49.5%", yourImage})=>{
    const [hidden, setHidden] = useState(true)
    const toggleModal = ()=> { setHidden(!hidden);}
    return (
        <div className="card-picture border-[0.15vw] rounded-md flex flex-col" style={{width:widthPercent}}>
            <div className="header w-full h-[10%] border-b-[0.15vw] flex flex-col justify-center flex-none">
                <div className="flex flex-row justify-between px-[3%]">
                    <div className="font-medium text-[1.2vw]">
                        {title}
                    </div>
                    <button onClick={()=>toggleModal()}>
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
            <div className="flex flex-col justify-center h-[90%] relative ">
                <div className="flex flex-row justify-center ">
                    <Image
                        src={yourImage}
                        alt="Your Image"
                        layout='fill'
                        objectFit='contain'
                        className="p-[2%]"
                        priority
                    />
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
export default CardPicture;