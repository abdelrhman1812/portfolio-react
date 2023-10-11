import React from 'react'
import Style from './Contact.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function Contact() {

  let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  function sendSubmit() {
    console.log("submit")
  }

  let validationSchema = Yup.object({

    name: Yup.string().min(3, "name of length must be 3").max(10, "name of length must be 10").required("name must be requird"),
    email: Yup.string().email("emial is invalid").required("email must be required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, "password is invalid "),




  })
  let formik = useFormik({

    initialValues: {

      name: "",
      age: "",
      email: "",
      pasword: "",
    }, validationSchema,

    onSubmit: sendSubmit

  })
  return <>
    <div className='contact vh-100'>

      <div className='container'>
        <div className='row py-5'>
          {/* head */}
          <div className="head-contact text-center">
            <h1 className=' font-wight'>Contact</h1>
            <span className="span-after-contact position-relative">
              <i className="headcontact fa-regular fa-star "></i>
            </span>
          </div>
        </div>
        <div className='row'>
          <form onSubmit={formik.handleSubmit} >

            {/* name */}
            {formik.values.name ? <label htmlFor="name " className={Style.Contact}>userName : </label> : ""}
            <input type="text" placeholder="Name" className='form-control my-2' id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.name && formik.touched.name ? <div className='alert alert-danger p-1 w-50'>{formik.errors.name}</div> : ''}
            {/* age */}
            {formik.values.age ? <label htmlFor="age" className={Style.Contact}>userAge</label> : ""}
            <input type="number" placeholder='Age' className='form-control my-2' id='age' value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.age && formik.touched.age ? <div className='alert alert-danger p-1 w-50'>{formik.errors.age}</div> : ''}
            {/* email */}

            {formik.values.email ? <label htmlFor="email" className={Style.Contact}>userEmail</label> : ""}
            <input type="email" placeholder='Email' className='form-control my-2' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-1 w-50'>{formik.errors.email}</div> : ''}
            {/* password  */}
            {formik.values.pasword ? <label htmlFor="password" className={Style.Contact}>userPassword</label> : ""}
            <input type="password" placeholder='Password' className='form-control my-2' id='pasword' value={formik.values.pasword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.pasword && formik.touched.pasword ? <div className='alert alert-danger p-1 w-50'>{formik.errors.pasword}</div> : ''}
            {/* btn */}
            <button className='btn btn-outline-dark' disabled={!(formik.isValid && formik.dirty)}>Send</button>
          </form>
        </div>
      </div>
    </div>


  </>
}
