import Image from "next/image";
const Title = ({title, icon}) =>{
    return (
        <div className="title_area  flex-none  flex justify-center flex-col">
            <div className=" flex">
                <Image
                    src={icon}
                    alt={icon}
                    width={60}
                    height={24}
                    className="w-[3%]"
                    priority
                />
                
                <div className="my-auto mx-[1%] text-[1.5vw] font-semibold">{title}</div>
            </div>
        </div>
    )
}
export default Title;