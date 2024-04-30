import React from 'react'
import Navbar from './components/Header'
// import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>

    </>
  )
}

export default Layout