'use client';
import "../../styles/tools-styles.css"
import SideBar from "@/components/sidebar-component";
import NavBar from "@/components/navbar-component";
import { useAppContext } from "@/components/context-component";
import { useRouter } from "next/navigation";
import injectScript from "@/utils/injectScript";
import { useEffect,useState } from "react";
const ToolsLayout = ({ children })=> {
  const {globalImage, setGlobalImage} = useAppContext()
  const router = useRouter()
  if (!globalImage){
    router.push('/')
  }
  const [cvState, setCvState] = useState(false);
  const [npState, setNpState] = useState(false);
  function onOpenCvReady() {
    setCvState(true);
  }

  function onNumpyReady() {
    setNpState(true);
  }
  useEffect(() => {
    async function fetchLib() {
      await injectScript('opencv-injected-js', '/libs/opencv.js')
        .then(() => onOpenCvReady())
        .catch(() => console.log('Error loading dependencies, please refresh'));
      await injectScript('numpy-injected-js', '/libs/numjs.min.js')
        .then(() => onNumpyReady())
        .catch(() => console.log('Error loading dependencies, please refresh'));
    }
    fetchLib();
  }, [globalImage]);
  return (
         cvState && npState?
            <div className=" my-main-container flex flex-col">
            
              <NavBar useInHome={false}/>
              <SideBar />
              <div className="main_part">{children}</div>
          </div>
          :null
    
    
  )
}

export default ToolsLayout;