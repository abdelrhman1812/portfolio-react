import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {


  const navLink = ({ isActive }) => {

    return {
      background: isActive ? "#1abc9c" : "",
      width: isActive ? "fit-content" : "fit-content",
      padding: isActive ? "10px" : "10px",
      borderRadios: isActive ? "10px" : "",
    }


  }
  return <>





    <nav className="navbar navbar-expand-lg navbar-dark  bg-second ">
      <div className="container">
        <Link className="navbar-brand" to="home">Abdelrhman</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon  "></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 transition" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ">
            {/* About */}
            <li className="nav-item">
              <NavLink style={navLink} className=" transition nav-link active rounded-3 mx-2" aria-current="page" to="about" id='ac'>About</NavLink>
            </li>
            {/* Portfolio */}
            <li className="nav-item">
              <NavLink style={navLink} className="transition nav-link active rounded-3 mx-2" aria-current="page" to="protfolio">Portfolio</NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink style={navLink} className=" transition nav-link active rounded-3 mx-2" aria-current="page" to="contact">Contact</NavLink>
            </li>



          </ul>
        </div>
      </div>
    </nav>


  </>
}
