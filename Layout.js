import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout