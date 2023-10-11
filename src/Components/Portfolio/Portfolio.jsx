
import React, { useEffect, useState } from 'react';
import Style from './Portfolio.module.css';

export default function Portfolio() {



  const [imges, setImges] = useState([

    { id: 0, value: require('../../assets/images/1.jpeg') },
    { id: 1, value: require('../../assets/images/2.jpeg') },
    { id: 2, value: require('../../assets/images/3.jpeg') },
    { id: 3, value: require('../../assets/images/4.jpeg') },
    { id: 4, value: require('../../assets/images/5.jpeg') },
    { id: 5, value: require('../../assets/images/6.jpeg') }


  ])

  const [slider, setSlider] = useState([])

  let over;
  let port;

  useEffect(() => {

    over = document.getElementById("over")
    port = document.getElementById("port")

    port.addEventListener("click", function (e) {
      over.style.display = 'none'
      // console.log(e.target)
    })

  }, [slider])



  const handelClick = (index) => {

    console.log(index)


    const slid = imges[index]

    setSlider(slid)
    console.log(slider)

    over.style.display = 'flex'


  }


  return <>
    <div className='position-relative ' id="port">

      <div className=' overlay position-fixed b-none ' id="over">
        <div className=' ' >
          <img src={slider.value} alt="" className='w-100' />
        </div>

      </div>
      <div className='container'>
        <div className='row py-2 '>

          {/* head */}
          <div className="head-about text-center">
            <h1 className=' font-wight'>Portfolio</h1>
            <span className=" span-after-contact position-relative">
              <i className="headcontact fa-regular fa-star "></i>
            </span>
          </div>

        </div>
        <div className='row p-3 gy-2 '>

          {

            imges.map((data, i) => {

              return <div className='col-md-4'>

                <img key={data.id} src={data.value} className='w-100' onClick={() => handelClick(i)} />

              </div>

            }
            )
          }

        </div>
      </div>

    </div>

  </>


}
