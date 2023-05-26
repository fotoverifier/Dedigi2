import Image from 'next/image'
import NavBar from '@/components/navbar-component';
const HomePage = () => {
  return (
    <div className='h-[200vh] '>
      <div className='relative h-fit'>
        <NavBar useInHome={true}/>
          <Image src="/Background.svg"
                alt="Background"
                width={100}
                height={30}
                quality={100}
                className="w-[100vw] mt-[-35vh]"
                priority>
                
          </Image>
          <div className='absolute left-[53%] top-[30%] pr-[200px] '>
            <div className='text-5xl mb-7 font-bold'>
                FotoVerifier
            </div>
            <div className='text-xl mb-20'>
              This is a tool for detecting image tampering using Digital Image Forensics techniques, along with the techniques are some other functionalities which further enhance the user's engagement. With the goals of creating an actual environment for interacting with different DIF methods, FotoVerifier was created.
            </div>
            <a className='w-[200px] h-[50] border-2 rounded-md p-4 flex flex-row'>
              <div className='text-2xl mr-2'>Get started</div>
              
              <Image src="/ArrowDown.svg"
                alt="ArrowDown"
                width={25}
                height={25}
                quality={100}
                priority>
                
          </Image>
            </a>
          </div>
      </div>
        
    </div>
  )
}
export default HomePage;