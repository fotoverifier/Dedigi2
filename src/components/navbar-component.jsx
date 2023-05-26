"use client";
import "../styles/navbar-styles.css"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const NavBar = ({useInHome=false}) =>{
    const [changeColor, setChangeColor] = useState(false)
    const onScroll = () =>{
        console.log(window.screenY)
        if (window.scrollY  >= 500){
            setChangeColor(true);
        }
        else{
            setChangeColor(false);
        }
       
    }
    if (useInHome){
        window.addEventListener('scroll', onScroll)
    }
    return (
        <div className= "navbar sticky z-50 top-0" style={{backgroundColor: useInHome && changeColor ? "" : "transparent"}}>
            <div className="left-navbar py-2">
                <Link href="/">
                    <Image src="/FullLogo.svg"
                        alt="HCMUS logo"
                        width={260}
                        height={30}
                        quality={100}
                        priority>
                        
                        </Image>
                </Link>
                
                

                
            </div>
            <div className="right-navbar">
                <Link className='nav-bar-link justify-center flex flex-col' href='/'>Home</Link>
                <Link className='nav-bar-link justify-center flex flex-col' href='/about'>About</Link>
                <Link className='nav-bar-link justify-center flex flex-col' href='/tutorial'>Tutorial</Link>
                <Link className='nav-bar-link justify-center flex flex-col' href='/'>GitHub</Link>
            </div>
                
        </div>
    )
}
export default NavBar;