import Image from "next/image";
const SideBar = () =>{
    return (
        <div className="sidebar shadow-xl"> 
        <div className="flex justify-center ">
            <div className="my-7">
                <Image
                    src="/Logo.svg"
                    alt="FotoVerifier Logo"
                    className="dark:invert"
                    width={70}
                    height={24}
                    priority
                    />
                <div className="flex justify-center">
                    <div className="py-5">
                        <div className="flex justify-center my-10">
                            <a href="fb.com">
                                    <Image
                                        src="/Information.svg"
                                        alt="FotoVerifier Logo"
                                        className="dark:invert "
                                        width={30}
                                        height={24}
                                        priority
                                        />
                                </a>
                        </div>
                        
                        <a href="fb.com" >
                            <Image
                                src="/CloningDetection.svg"
                                alt="FotoVerifier Logo"
                                className="dark:invert my-10"
                                width={35}
                                height={24}
                                priority
                                />
                        </a>
                        <a href="fb.com" >
                            <Image
                                src="/SplicingDetection.svg"
                                alt="FotoVerifier Logo"
                                className="dark:invert my-10"
                                width={35}
                                height={24}
                                priority
                                />
                        </a>
                        <a href="fb.com" >
                            <Image
                                src="/ShadowConsistencyChecking.svg"
                                alt="FotoVerifier Logo"
                                className="dark:invert my-10"
                                width={35}
                                height={24}
                                priority
                                />
                        </a>
                        <a href="fb.com" >
                            <Image
                                src="/ReflectionConsistencyChecking.svg"
                                alt="FotoVerifier Logo"
                                className="dark:invert my-10"
                                width={35}
                                height={24}
                                priority
                                />
                        </a>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
             
        </div>
    )
}
export default SideBar;