import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
// import { Link } from 'react-router-dom'
// import {AiOutlineHeart} from 'react-icons/ai'


// import AboutUs from "../../components/AboutUs/AboutUs";
// import Footer from "../../components/Footer/Footer";

const Home = () => {
   return (
      <>
         <div id="home">
            <div className="container">
               <Header/>
               <main id="home-main">
                  <setion className="services">
                     <div className="service">
                        <img src="./images/meditation.png" alt="" className="service-img" />
                        <h2 className="service-title">Coaching</h2>
                        <p className="service-caption">
                           Lorem ipsum dolor sit amet.
                        </p>
                     </div>
                     <div className="service">
                        <img src="./images/yoga (3).png" alt="" className="service-img" />
                        <h2 className="service-title">Program</h2>
                        <p className="service-caption">
                           Lorem ipsum dolor sit amet.
                        </p>
                     </div>
                     <div className="service">
                        <img src="./images/yoga-mat.png" alt="" className="service-img" />
                        <h2 className="service-title">Shop</h2>
                        <p className="service-caption">
                           Lorem ipsum dolor sit amet.
                        </p>
                     </div>
                  </setion>

                  {/* ----------------- */}
                  <section className="yoga-classes-section">
                     <h2 className="yoga-classes-title">Find Your Perfect Class</h2>
                     <div className="classes-wrapper">
                        <div className="yoga-class-card">
                           <div className="class-banner">
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img"/>
                              <div className="class-like">
                                 <img src="./images/heart-empty.svg" alt="" className="class-like-icon" />
                                 {/* <i><AiOutlineHeart/></i> */}
                              </div>
                              <div className="class-price">
                                 <p className="class-price-text">399$</p>
                              </div>
                           </div>
                           <h3 className="class-title">coaching</h3>
                           <p className="class-caption">Lorem ipsum dolor sit amet.</p>
                           <a href="" className="btn class-link">Read More</a>
                        </div>

                        <div className="yoga-class-card">
                           <div className="class-banner">
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img"/>
                              <div className="class-like">
                                 <img src="./images/heart-empty.svg" alt="" className="class-like-icon" />
                                 {/* <i><AiOutlineHeart/></i> */}
                              </div>
                              <div className="class-price">
                                 <p className="class-price-text">399$</p>
                              </div>
                           </div>
                           <h3 className="class-title">coaching</h3>
                           <p className="class-caption">Lorem ipsum dolor sit amet.</p>
                           <a href="" className="btn class-link">Read More</a>
                        </div>

                        <div className="yoga-class-card">
                           <div className="class-banner">
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img"/>
                              <div className="class-like">
                                 <img src="./images/heart-empty.svg" alt="" className="class-like-icon" />
                                 {/* <i><AiOutlineHeart/></i> */}
                              </div>
                              <div className="class-price">
                                 <p className="class-price-text">399$</p>
                              </div>
                           </div>
                           <h3 className="class-title">coaching</h3>
                           <p className="class-caption">Lorem ipsum dolor sit amet.</p>
                           <a href="" className="btn class-link">Read More</a>
                        </div>

                        <div className="yoga-class-card">
                           <div className="class-banner">
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img"/>
                              <div className="class-like">
                                 <img src="./images/heart-empty.svg" alt="" className="class-like-icon" />
                                 {/* <i><AiOutlineHeart/></i> */}
                              </div>
                              <div className="class-price">
                                 <p className="class-price-text">399$</p>
                              </div>
                           </div>
                           <h3 className="class-title">coaching</h3>
                           <p className="class-caption">Lorem ipsum dolor sit amet.</p>
                           <a href="" className="btn class-link">Read More</a>
                        </div>

                     </div>
                        <a href="" className="btn classes-all-btn">view all</a>
                  </section>
               </main>
               <section className="newsLetter-section">
                  <div className="newsLetter__content">
                     <h2 className="newsLetter__title">Let's Stay in Touch</h2>
                     <p className="newsLetter__cation">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aspernatur.
                     </p>
                     <div className="newsLetter__email-box">
                        <form action="">

                        </form>
                     </div>
                     <div className="newsLetter__banner">
                        <img src="" alt="" />
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </>
   );
};

export default Home;