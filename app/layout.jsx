
import Script from 'next/script'
import './globals.css'
import Top_quote from '@components/Top_quote'
import Name from '@components/Name'
import Name2 from '@components/Name2'
import Nav from '@components/Navbar'
import Intro from '@components/intro'
import Tools from '@components/Tools'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
export const metadata = {
  title:"Vinay Kumar",
  description:"Portfolio of Vinay Kumar"
}

const Root_layout = ({children}) => {
  return (
    <html >
      <link rel="icon" href="images/favicon.ico" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"></link>
      <body >
        <Top_quote/>
        <Name/>
        <Name2/>
        <Nav/>
        <Intro/>
        <Tools/>
        <Projects/>
        {children}
        <Contact/>
        <Script src='/animation.js' defer></Script>
        <Script src='/current_active.js' defer></Script>
      </body>
    </html>
  )
}

export default Root_layout
