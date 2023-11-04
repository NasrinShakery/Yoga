import React from 'react'
import './NewsLetter.scss';
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs';

const NewsLetter = () => {
  return (
   <section id="newsLetter-section">
      <div className="newsLetter__content">
         <h2 className="newsLetter__title">Let's Stay in Touch</h2>
         <p className="newsLetter__caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aspernatur.
         </p>
         <div className="newsLetter__email-box">
            <form action="">
               <i className="email-icon"><AiOutlineMail /></i>
               <input type="text" className="newsletter__input" placeholder='Email Address' />
               <button className="newsletter__submit"><BsFillSendFill/></button>
            </form>
         </div>
      </div>
      <div className="newsLetter__banner">
            {/* <img src="./images/yoga-meditation.png" alt="" /> */}
            <img src="./images/yoga-person-4.webp" alt="" />
         </div>
   </section>
  )
}

export default NewsLetter