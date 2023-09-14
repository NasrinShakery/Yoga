import React from 'react';
import "./Header.scss";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <Navbar/>
      <div className="header__content">
        {/* <div className="imgbox">
          <img src="./images/yoga-person.jpg" alt="" />
        </div> */}
        <div className="content-box">
          <h1 className='header-title'>Do It For Your Future Self</h1>
          <p className='header-content-caption'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Beatae recusandae vel praesentium suscipit laboriosam rem veritatis.
          </p>
          <a href="#" className='btn header-content-btn'>start</a>
        </div>
      </div>
      
    </header>
  )
}

export default Header