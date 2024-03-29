
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { AuthContextProvider } from './context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'REVIEW REWARD',
  description: 'GIVE REVIEW TAKE REWARD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
        <AuthContextProvider>
        <div className="flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
         <Footer/>
         </AuthContextProvider>
      </body>
      
    </html>
  )
}