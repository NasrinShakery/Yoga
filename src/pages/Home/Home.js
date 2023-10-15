import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import YogaServices from "../../components/YogaServices/YogaServices";
import YogaClasses from "../../components/YogaClasses/YogaClasses";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
// import { ReactComponent as SVGIcon } from './path/to/svg/icon.svg';
// import { Link } from 'react-router-dom'


// import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

function Home() {
   return (
      <>
         <div id="home">
            <div className="container">
               <Header />
               <main id="home-main">
                  
                  <YogaServices/>

                  <YogaClasses/>
                  
               </main>
               <NewsLetter/>
            </div>
         </div>
      </>
   );
}

export default Home;