import React from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'
export default function Layout() {
  return <>
    <div>

      <Navbar />
    </div>


    <div>  <Outlet>
    </Outlet>
    </div>

    <div>
      <Footer />

    </div>
  </>


}
