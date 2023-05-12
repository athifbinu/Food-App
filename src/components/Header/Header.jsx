

import "./Header.css"

import logo from "../../img/omnifood-logo.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'






const Header = () => {





  return (
    <header className='header'>
     <Link to="/home">
      <img className='logo' src={logo} alt="Omnifood logo" />
     </Link>


     <nav className='main-nav'>
          <ul className='main-nav-list'>
          <li><Link className="main-nav-link" to="/home">Home</Link></li>
          <li><Link className="main-nav-link" to="/foods">All Foods</Link></li>
          <li>
            <Link className="main-nav-link" to="/cart">Cart</Link>
          </li>
          <li><Link className="main-nav-link" to='/Contact'>Contact Us</Link></li>
          <li><Link className="main-nav-link nav-cta" to="/login">Join Now</Link></li>


          </ul>
     </nav>

     <button  class="btn-mobile-nav">
      <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
    
      </button>


    </header>
  )
}

export default Header
