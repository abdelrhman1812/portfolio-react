import React from 'react'
import Style from './Footer.module.css'
export default function Footer() {
  return <>

    <div className='footer bg-second '>
      <div className='container'>
        <div className='row text-white text-center py-5'>


          {/* location */}
          <div className='location col-md-4 mb-5 mb-md-0'>
            <h4 className='font-wight'>LOCATIO</h4>
            <p>Mansoura</p>
            <p>Algomhoriya 23</p>
          </div>

          {/* social */}
          <div className='social col-md-4 mb-4 mb-md-0' >
            <h4 className='font-wight'>AROUND THE WEB</h4>
            <div className='icons '>
              <i className="fa-brands fa-facebook p-2" ></i>
              <i className="fa-brands fa-twitter p-2" ></i>
              <i className="fa-brands fa-linkedin p-2"></i>
              <i className="fa-brands fa-whatsapp p-2"></i>
            </div>
          </div>

          {/* about-details */}
          <div className='about-details w-m col-md-4 mb-4 mb-md-0'   >
            <h4 className='font-wight'>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Abdelrhman</p>
          </div>


        </div>
      </div>
      {/*Copyright  */}
      <div className='copyright bg-dark text-white p-2 text-center' >
        Copyright © Your Website 2023
      </div>

    </div>



  </>
}
