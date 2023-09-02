"use client";
import "../styles/navbar-styles.css"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const NavBar = ({useInHome=false}) =>{
    const [changeColor, setChangeColor] = useState(false)
    const onScroll = () =>{
        console.log(window.screenY)
        if (window.scrollY  >= 100){
            setChangeColor(true);
        }
        else{
            setChangeColor(false);
        }
       
    }
    useEffect(() => {
        // window is accessible here.
        if (useInHome)
            window.addEventListener('scroll', onScroll);
        
      }, [useInHome]);
    
    return (
        <div className= "navbar sticky z-50 top-0" style={{backgroundColor: useInHome && !changeColor ? "transparent" : ""}}>
            <Link href="/" className="flex flex-col justify-center h-full ml-[5%]">
                    <Image src="/FullLogo.svg"
                        alt="HCMUS logo"
                        width={260}
                        height={30}
                        className="w-[20vh]"
                        priority>
                        
                        </Image>
                </Link>
            <div className="flex flex-row mr-[5%]">
                <Link className='nav-bar-link justify-center flex flex-col' href='/'>Home</Link>
                <Link className='nav-bar-link inactive justify-center flex flex-col' href='#'>About</Link>
                <Link className='nav-bar-link inactive justify-center flex flex-col' href='#'>Tutorial</Link>
                <Link className='nav-bar-link justify-center flex flex-col' href='https://github.com/fotoverifier/fotoverifier'>GitHub</Link>
            </div>
                
        </div>
    )
}
export default NavBar;