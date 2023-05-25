import Image from "next/image";
const Title = ({title, icon}) =>{
    return (
        <div className="title_area  flex-none  flex justify-center flex-col">
            <div className="px-5 flex">
                <Image
                    src={icon}
                    alt={icon}
                    width={60}
                    height={24}
                    priority
                />
                
                <div className="my-auto mx-3 text-2xl font-semibold">{title}</div>
            </div>
        </div>
    )
}
export default Title;