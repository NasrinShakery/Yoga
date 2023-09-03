import React from 'react'
import "./Navbar.scss";
import { useState } from 'react';

const Navbar = () => {
   const [hamburgerOpen, setHamburgerOpen] = useState(false) ;
   const hamburgerBtnHandler = () =>{
      setHamburgerOpen(!hamburgerOpen);
      console.log("clik......")
   }
  return (
    <nav className="nav">
      <a href="#" className="app-logo">
         <img src="./images/yoga-logo.svg" alt="yoga" className='app-logo__img' />
      </a>
      <ul className="menu">
         <li className="menu__item">
            <a href="#" className="menu__link">Home</a>
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

      <div className="header__btn-links">
         <a href="#" className="header__btn-link">Sign up</a>
         <a href="#" className="header__btn-link header__btn-link--border">Sign in</a>
      </div>
      <div className="nav__hamburger-btn" onClick={hamburgerBtnHandler}>
         <span className="nav__hamburger-btn-line"></span>
      </div>
    </nav>
  )
}

export default Navbar