import React from 'react'
import "./Navbar.scss";
import { useState } from 'react';

const Navbar = () => {
   const [hamburgerOpen, setHamburgerOpen] = useState(false) ;
   const hamburgerBtnHandler = () =>{
      setHamburgerOpen(!hamburgerOpen);
      // console.log("clik......")
   }
  return (
    <nav className="nav">
      <div className="logo-menu-Wrapper">
      <a href="#" className="app-logo">
         <img src="./images/yoga-logo.svg" alt="yoga" className='app-logo__img' />
      </a>
      <ul className="menu">
         <li className="menu__item">
            <a href="#" className="menu__link menu__link--active">Home</a>
         </li>
         <li className="menu__item">
            <a href="#" className="menu__link">Events</a>
         </li>
         <li className="menu__item">
            <a href="#" className="menu__link">Contact Us</a>
         </li>
         <li className="menu__item">
            <a href="#" className="menu__link">About Us</a>
         </li>
      </ul>
      </div>

      <div className={`nav-menu ${hamburgerOpen ? "" : " nav-menu--close"}`}>
         <ul className="mobile-menu">
            <li className="mobile-menu__item">
               <a href="#" className="mobile-menu__link">Home</a>
            </li>
            <li className="mobile-menu__item">
               <a href="#" className="mobile-menu__link">Events</a>
            </li>
            <li className="mobile-menu__item">
               <a href="#" className="mobile-menu__link">Contact Us</a>
            </li>
            <li className="mobile-menu__item">
               <a href="#" className="mobile-menu__link">About Us</a>
            </li>
         </ul>
         <div className="nav-menu__links">
            <a href="#" className="nav-menu__link">Sign up</a>
            <a href="#" className="nav-menu__link nav-menu__link--border">Sign in</a>
         </div>
      </div>

      <div className="login-btn-links">
         <a href="#" className="login-btn-link">Sign up</a>
         <a href="#" className="login-btn-link login-btn-link--border">Sign in</a>
      </div>
      <div className={`nav__hamburger-btn ${hamburgerOpen ? " nav__hamburger-btn--open" : ""}`} onClick={hamburgerBtnHandler}>
         <span className="nav__hamburger-btn-line"></span>
      </div>
    </nav>
  )
}

export default Navbar