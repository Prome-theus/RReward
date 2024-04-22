
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { AuthContextProvider } from './context/AuthContext'
import TransitionProvider from '../components/transitionProvider'
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
        
          <main className="flex-1"><TransitionProvider>{children}</TransitionProvider></main>
        </div>
         
         </AuthContextProvider>
      </body>
      
    </html>
  )
}


    //create a seprate database for users data -- done
    //on login page check user with database if new user then review points sholud be provided -- done
    //every review point proived for the review must be added to the users review points --done

    //review points must be used for buying rewards 
    //user setting page for deleting review
    //all review page
    //search implementation(killer)
    //icon to dashboard(varun)
    //privacy policy(varun)
    //footer setup(varun)
    //category fetch data(shivam)
    //landing page(tanish)
  