'use client';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import links from "@/utils/navlinks";
import Link from "next/link";
import { useAppContext } from "./context-component";
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
        <div className="sidebar shadow-xl flex flex-col justify-center" > 
        <div className="flex flex-col h-full mt-[100%]">

       
            <div className="flex flex-col justify-between h-[50%]">
                   
                    {links.map((link) => {
                        const isActive = isActiveCheck(link.href);

                        return (
                            <Link
                                className="flex justify-center flex-row w-full"
                                href={standardSplicingLink(link.href)}
                                key={link.href}
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
                        );
                        })}

              
                    
                </div>
                </div>
        </div>
    )
}
export default SideBar;