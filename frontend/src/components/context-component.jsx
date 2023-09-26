// store state
'use client';
import { createContext, useContext,useEffect,useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [globalImage, setGlobalImage] = useState();
    const [currentSplicingTool, setCurrentSplicingTool] = useState('/jpeg-ghost')
    const [isOpenedPopup, setIsOpenedPopup] = useState(true);
    const [changeImageTrigger, setChangeImageTrigger] = useState(false);
    //Cloning detection

    const [cloningDetectionResultUrl, setCloningDetectionResultUrl] = useState(null)


    //JPEG Ghost state
    const [jpegQuality, setJpegQuality] = useState([0, 60])

    //CFA state
    const [CFAResultUrl, setCFAResultUrl] = useState(null);
    const [JPEGGhostResultUrl, setJPEGGhostResultUrl] = useState(null);
    useEffect(()=>{
      resetValue();
    },[globalImage])
    const resetValue = ()=>{
      setCloningDetectionResultUrl(null);
      setJpegQuality([0, 60])
      setCFAResultUrl(null);
      setChangeImageTrigger(true);
    }
    return (
      <AppContext.Provider 
        value={
                {
                    globalImage, setGlobalImage,
                    changeImageTrigger, setChangeImageTrigger,
                    isOpenedPopup, setIsOpenedPopup,
                    jpegQuality, setJpegQuality,
                    CFAResultUrl, setCFAResultUrl,
                    cloningDetectionResultUrl, setCloningDetectionResultUrl,
                    currentSplicingTool, setCurrentSplicingTool,
                    JPEGGhostResultUrl, setJPEGGhostResultUrl
                }
              }
        >
        {children}
      </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}