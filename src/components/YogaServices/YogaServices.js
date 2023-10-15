import React from 'react';
import './YogaServices.scss'

const YogaServices = () => {
  return (
   <section className="services">
      <div className="service">
         {/* <img src="./images/meditation.png" alt="" className="service-img" /> */}
         <img src="./images/yoga-person1.png" alt="" className="service-img" />

         <h2 className="service-title">Coaching</h2>
         <p className="service-caption">
            Lorem ipsum dolor sit amet.
         </p>
      </div>
      <div className="service">
         {/* <img src="./images/yoga (3).png" alt="" className="service-img" /> */}
         <img src="./images/yoga-person1.png" alt="" className="service-img" />

         <h2 className="service-title">Program</h2>
         <p className="service-caption">
            Lorem ipsum dolor sit amet.
         </p>
      </div>
      <div className="service">
         {/* <img src="./images/yoga-mat.png" alt="" className="service-img" /> */}
         <img src="./images/yoga-person1.png" alt="" className="service-img" />

         <h2 className="service-title">Shop</h2>
         <p className="service-caption">
            Lorem ipsum dolor sit amet.
         </p>
      </div>
   </section>
  )
}

export default YogaServices