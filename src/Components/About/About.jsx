import React from 'react'
import Style from './About.module.css'
export default function About() {
  return <>

    <div className='about bg-main vh-100 d-flex justify-content-center align-items-center'>

      <div className='container'>
        <div className='row py-5'>
          {/* head */}
          <div className="head-about text-center">
            <h1 className='text-light font-wight'>ABOUT COMPONENT</h1>
            <span className="span-after position-relative">
              <i className="head fa-regular fa-star "></i>
            </span>
          </div>

          {/* content */}
          <div className='row p-2 text-light' >

            <div className='col-md-6'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className='col-md-6'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>

          </div>

        </div>
      </div>
    </div>




  </>
}
