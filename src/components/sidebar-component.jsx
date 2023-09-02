'use client';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import links from "@/utils/navlinks";
import Link from "next/link";
import { useAppContext } from "./context-component";
import ChangeThemeBtn from "./change-theme-btn-component";
const SideBar = () =>{
    const {currentSplicingTool} = useAppContext()
    const pathname = usePathname();
    const isActiveCheck = (link)=>{
        return pathname.startsWith(link)
    }
    const standardSplicingLink = (link)=>{
        if (link.startsWith("/tools/image-splicing-detection")){
            return link + '/' + currentSplicingTool
        }
        return link;
    }
    return (
        <div className="sidebar shadow-xl flex flex-col justify-center " > 
            <div className="flex flex-col h-full mt-[250%]">
                <div className="flex flex-col justify-between h-[50%]">
                    
                        {links.map((link) => {
                            const isActive = isActiveCheck(link.href);

                            return (
                                <div key={link.href} className="sidebar-item relative">
                                    <Link
                                        className="flex justify-center flex-row w-full "
                                        href={standardSplicingLink(link.href)}
                                        
                                        >
                                        <Image
                                            src={link.icon}
                                            alt={link.icon}
                                            className={(!isActive ? ' filter-grey' : '') + ' w-[50%]' }
                                            width={25}
                                            height={2}
                                            priority
                                        />
                                        
                                    </Link>
                                    <div className="absolute sidebar-tooltip z-10 top-[-30%] left-[90%] flex flex-row w-[25vw]">
                                            <div className='flex flex-col justify-center '>
                                                <div className="w-0 h-0 slider-hint-child-triangle border-t-[0.5vh] border-t-transparent
                                                border-r-[1.5vh] 
                                                border-b-[0.5vh] border-b-transparent"/>
                                            </div>
                                            <div className='slider-hint-child flex flex-row justify-center text-[0.8vw] rounded-md p-[2%] '>
                                            {link.name}  
                                            </div>
                                                
                                                
                                        </div>
                                </div>
                                
                                
                                
                            );
                            })}

                
                        
                    </div>
                    
            </div>
            {/* <div className="flex flex-row justify-center">
                <ChangeThemeBtn/>
            </div> */}
            
        </div>
    )
}
export default SideBar;