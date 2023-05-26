import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FotoVerifier',
  description: 'Detecting tampered photo',
  icons: {
    icon: '/Logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
