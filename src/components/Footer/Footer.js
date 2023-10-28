import React from "react";
import "./Footer.scss";
import {AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
   return (
      <footer id="footer">
         <div className="container">
            <a href="#" className="footer__scroll">
               <AiOutlineArrowUp/>
            </a>
            <div className="footer-wrapper">
               <div className="footer-left">
                  <div className="footer__content">
                     <h2 className="footer__title">
                        WHERE FOCUS GOES, ENERGY FLOWS.
                     </h2>
                     <p className="footer__description">
                        BALANCE is not something you find, its something you
                        create.
                        BALANCE is not something you find, its something you
                        create.BALANCE is not something you find, its something you
                        create.BALANCE is not something you find, its something you
                        create.
                     </p>
                  </div>
               </div>

               <div className="footer-right">
                  <div className="footer-list-box">
                     <h2 className="footer__title">Get to know Us</h2>
                     <ul className="footer__list">
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              About Us
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Rules & Reservation Policies
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Accessibility
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Media Center
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Site Map
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div className="footer-list-box">
                     <h2 className="footer__title">Plan with Us</h2>
                     <ul className="footer-list">
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Find Your Goal
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Build your plan
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Buy{" "}
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Enter a Lottery
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div className="footer-list-box">
                     <h2 className="footer__title">Let Us Help You</h2>
                     <ul className="footer-list">
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Your Acount
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Your Reservation
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Contact Us
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Help Center
                           </a>
                        </li>
                        <li className="footer-list__item">
                           <a href="#" className="footer-list__link">
                              Submit Feedback
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               
            </div>

            <div className="footer__app">
                     <h2 className="footer__title">Download our app</h2>
                     <div className="app-wrapper">
                        <a href="#" className="footer-app__link">
                           <img
                              src="images/apple-app-store-logo.jpg"
                              className="footer-app__img"
                              alt="apple app store"
                           />
                        </a>
                        <a href="#" className="footer-app__link">
                           <img
                              src="images/google-play-logo.png"
                              className="footer-app__img"
                              alt="google play"
                           />
                        </a>
                     </div>
               </div>

            <div className="foter__copy-right">
               <p>&copy; 2023. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
