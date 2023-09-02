import ImagePicker from '@/components/image-picker-component';
import Image from 'next/image'
import "../styles/homepage-styles.css"
import NavBar from '@/components/navbar-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  
  return (
    <div className='h-[200vh] w-full'>
      
      <NavBar useInHome={true}/>
      <div className='relative h-fit'>
          <Image src="/Background.svg"
                alt="Background"
                width={100}
                height={30}
                quality={100}
                className="w-[100vw] mt-[-35vh]"
                priority>
                
          </Image>
          <div className='absolute left-[53%] top-[40%] pr-[10%] '>
            <div className='text-[3vw] mb-[2%] font-bold'>
                FotoVerifier
            </div>
            <div className='text-[1.1vw] mb-[5%]'>
              This is a tool for detecting image tampering using Digital Image Forensics techniques, along with the techniques are some other functionalities which further enhance the user&apos;s engagement. With the goals of creating an actual environment for interacting with different DIF methods, FotoVerifier was created.
            </div>
            <a href='#start' className='w-[10.5vw] border-[0.2vw] rounded-md p-[2%] flex flex-row justify-between home-bg-btn'>
              <div className='text-[1.3vw] font-bold'>Get started</div>
              <div className='flex flex-col justify-center'>
                <FontAwesomeIcon
                    icon={faArrowDown}
                    className='text-[1.3vw]'
                />
              </div>
            </a>
          </div>
      </div>
        <div id="start"></div>
        <div  className='flex flex-row justify-center text-[3vw] font-bold m-[5vh]'>
          Get Started!
        </div>
        <div  className='flex flex-row justify-center w-full'>
          <div className='w-[50%]'>
            <ImagePicker/>
          </div>
        </div>
        
        
        
    </div>
  )
}
export default HomePage;