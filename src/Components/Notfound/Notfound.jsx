import React from 'react'
import Style from './Notfound.module.css'
import notFound from "../../assets/images/notfound.gif"
export default function Notfound() {
  return <>


    <div className='container'>
      <div className='row text-center py-5'>
        <div className='image '>
          <img src={notFound} className='w-100' />
        </div>
      </div>
    </div>

  </>
}
