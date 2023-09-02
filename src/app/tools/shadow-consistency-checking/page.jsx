import Title from "@/components/title-component";
import Image from "next/image";
const ShadowConsistencyCheckingPage = () => {
    return (
        <div className="flex flex-col p-[1.5%] h-full" >
            <Title title={"Shadow Consistency Checking"} icon="/ShadowConsistencyChecking.svg" className="flex-none" />
            <div className="result_area flex flex-col grow justify-around">
                <div className="description-block flex-none h-fit text-[1vw]">
                    This tool is still under development!
                </div>
                <div className="flex flex-row justify-center h-[80%] w-full">
                    <div className="flex flex-row justify-between w-[100%] ">
                        <div className="card-picture border-[0.15vw] rounded-md flex justify-center flex-col" style={{width: "100%"}} >
                            <div className="flex justify-center flex-row" >
                                <Image
                                    src="/Development.svg"
                                    alt="Development.svg"
                                    className='w-[20%]'
                                    width={25}
                                    height={2}
                                    priority
                                />
                            </div>
                            
            
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}
export default ShadowConsistencyCheckingPage;