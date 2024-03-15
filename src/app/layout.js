import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'REVIEW REWARD',
  description: 'GIVE REVIEW TAKE REWARD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
        <Header/>
        <Navbar/>
        {children}
      
        </body>
        
    </html>
  )
}
