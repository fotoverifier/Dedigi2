import '../styles/globals.css'
import { Inter } from 'next/font/google'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FotoVerifier',
  description: 'Detecting tampered photo',
  icons: {
    icon: '/Logo.svg',
  },
}
import { AppWrapper } from '@/components/context-component';
export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className=''>
      <AppWrapper>
      <body className={inter.className}>{children}</body></AppWrapper>
  
    </html>
  )
}
