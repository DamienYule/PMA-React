import React from 'react'
import logo_img from "../assets/logo.png"
import "../Components/Style/NavBar.css"
function NavBar() {
    return (
        <div >
        <a > <img src={logo_img} alt="ASAP" class="logo"/></a>
        <ul class="nav-bar">
            <li><a href="">Home</a></li>
            <li><a href="">About </a></li>
            <li><a href="">products & services</a></li>
            <li><a href="">Capability Statement</a></li>
            {/* <li><a href="#">Interpreting</a></li>
         <li><a href="https://www.google.com/" target="_blank">search</a></li> */}
         
        </ul>
    </div>
    )
}

export default NavBar
