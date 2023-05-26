import "../styles/card-picture-styles.css"
import Image from "next/image";
const CardPicture = ({title, icon})=>{
    return (
        <div className="card-picture border-2 rounded-md flex flex-col">
            <div className="header w-full h-[50px] border-b-2 flex flex-col justify-center flex-none">
                <div className="flex flex-row justify-between px-5">
                    <div className="font-medium text-lg">
                        {title}
                    </div>
                    <div>
                    
                    
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center grow">
                <div className="flex flex-row justify-center">
                <Image
                    src="/Sample.png"
                    alt="/Sample.png"
                    width={500}
                    className="w-[200px] md:w-[300px] lg:w-[500px]"
                    height={24}
                    priority
                />
                </div>
            </div>
            
        </div>
    )
}
export default CardPicture;