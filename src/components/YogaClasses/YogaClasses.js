import React from 'react';
import './YogaClasses.scss';
import HeartIcon from "../../components/HeartIcon/HeartIcon";


const YogaClasses = () => {
  return (
    <section className="yoga-classes-section">
                     <h2 className="yoga-classes-title">Find Your Perfect Class</h2>
                     <div className="classes-wrapper">
                        <div className="yoga-class-card">
                           <div className="class-banner">
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img" />
                              <div className="class-like">
                                 <HeartIcon />
                                 {/* <img src="./images/heart-empty.svg" alt="" className="class-like-icon" /> */}
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
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img" />
                              <div className="class-like">
                                 <HeartIcon />
                                 {/* <img src="./images/heart-empty.svg" alt="" className="class-like-icon" /> */}
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
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img" />
                              <div className="class-like">
                                 <HeartIcon />
                                 {/* <img src="./images/heart-empty.svg" alt="" className="class-like-icon" /> */}
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
                              <img src="./images/yoga-coaching.jpg" alt="" className="class-img" />
                              <div className="class-like">
                                 <HeartIcon />
                                 {/* <img src="./images/heart-empty.svg" alt="" className="class-like-icon" /> */}
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
  )
}

export default YogaClasses