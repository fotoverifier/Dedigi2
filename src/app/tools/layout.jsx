'use client';
import "../../styles/tools-styles.css"
import SideBar from "@/components/sidebar-component";
import NavBar from "@/components/navbar-component";
import { useAppContext } from "@/components/context-component";
import { useRouter } from "next/navigation";
const ToolsLayout = ({ children })=> {
  const {globalImage, setGlobalImage} = useAppContext()
  const router = useRouter()
  if (!globalImage){
    //router.push('/')
  }
  return (
         true || globalImage?
            <div className=" my-main-container flex flex-col">
            
              <NavBar useInHome={false}/>
              <SideBar />
              <div className="main_part">{children}</div>
          </div>
          :null
    
    
  )
}

export default ToolsLayout;