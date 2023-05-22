import Image from "next/image";
const Title = ({title}) =>{
    return (
        <div className="title_area flex justify-center flex-col">
            <div className="px-5 flex">
                <Image
                    src="/CloningDetectionLight.svg"
                    alt="Cloning detection Logo"
                    className="dark:invert"
                    width={60}
                    height={24}
                    priority
                />
                
                <div className="my-auto mx-3 text-2xl">{title}</div>
            </div>
        </div>
    )
}
export default Title;