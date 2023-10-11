import React from 'react'
import Style from './Home.module.css'
import logo from '../../assets/images/avataaars.svg'
export default function Home() {
  return <>

    <div className='bg-main vh-100 home d-flex justify-content-center align-items-center text-center'>
      <div className='home-info  w-50 ' >
        <div className='home-img text-center'>
          <img src={logo} alt="" className='w-25' />
        </div>
        <h1 className='text-light'>START FRAMEWORK </h1>
        <span className="span-after position-relative">
          <i className="head fa-regular fa-star "></i>
        </span>

        <p className='text-light'>Graphic Artist - Web Designer - Illustrator</p>

      </div>

    </div >



  </>
}
