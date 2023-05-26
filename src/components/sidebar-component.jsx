'use client';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import links from "@/utils/navlinks";
import Link from "next/link";
const SideBar = () =>{
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="sidebar shadow-xl" > 
        <div className="flex justify-center ">
            <div className="my-8">
                <div className="flex justify-center my-5">
                    <div className="py-5">
                    {links.map((link) => {
                        const isActive = pathname.startsWith(link.href);

                        return (
                            <Link
                                
                                href={link.href}
                                key={link.href}
                                >
                                <Image
                                    src={link.icon}
                                    alt={link.icon}
                                    className={(!isActive ? ' filter-grey' : '') + ' my-10 ' }
                                    width={35}
                                    height={24}
                                    priority
                                />
                            </Link>
                        );
                        })}

                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
             
        </div>
    )
}
export default SideBar;