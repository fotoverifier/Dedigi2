
"use client";
import '../styles/change-theme-btn-styles.css'
import Image from 'next/image';
const ChangeThemeBtn = ()=>{
    return (
        <div className="absolute bottom-[3vh] change-theme-btn w-[3.3vw] h-[1.8vw] border-[0.12vw] rounded-full flex flex-row justify-around">
            <div className='w-full h-[full]  flex flex-row justify-center justify-around'>
                <div className=' w-[40%] h-[100%] flex flex-col justify-center  '>
                    <div className=' w-full h-[80%]  flex flex-row justify-center rounded-full'>
                        <Image
                            src="/Light.svg"
                            alt="/Light.svg"
                            className={(true ? ' filter-grey' : '') + ' w-[60%]' }
                            width={15}
                            height={2}
                            priority
                        />
                    </div>
                
                </div>
                <div className=' w-[40%] h-[100%] flex flex-col justify-center '>
                    <div className='active-toggle w-full h-[80%] flex flex-row justify-center rounded-full'>
                        <Image
                            src="/Dark.svg"
                            alt="/Dark.svg"
                            className={(!true ? ' filter-grey' : '') + ' w-[60%]' }
                            width={15}
                            height={2}
                            priority
                        />
                    </div>
                
                </div>
            </div>
          
            
        </div>
    )
}
export default ChangeThemeBtn;