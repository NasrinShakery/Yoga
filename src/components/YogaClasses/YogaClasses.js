import React,{useState} from "react";
import "./YogaClasses.scss";
import HeartIcon from "../../components/HeartIcon/HeartIcon";

import { useQuery } from "react-query";
import { fetchYogaClasses } from "../../services/yogaClassesApi";

const YogaClasses = () => {
   const {
      data: yogaClasses,
      isLoading,
      error,
   } = useQuery("yogaClasses", fetchYogaClasses);

   const {imgList, setImgList}= useState([]);

   if (isLoading) {
      return <h2>Loading ...</h2>;
   }
   if (error) {
      return <h2>*Error : {error.message}</h2>;
   }
   return (
      <section className="yoga-classes-section">
         <h2 className="yoga-classes-title">Find Your Perfect Class</h2>
         <div className="classes-wrapper">
            {console.log(yogaClasses.classes)}
            {yogaClasses.map((yogaClass) => (
               <div key={yogaClass.id} className="yoga-class-card">
                  <div className="class-banner">
                    
                     <img
                        src={process.env.PUBLIC_URL + yogaClass.img}
                        alt="yoga"
                        className="class-img"
                     />
         
                     
                     
                     <div className="class-price">
                        <p className="class-price-text">399$</p>
                     </div>
                  </div>
                  
                  <h3 className="class-title">{yogaClass.name}</h3>
                  <p className="class-caption">{yogaClass.description}</p>
                  <a href="#" className="btn class-link">
                     Read More
                  </a>
               </div>
            ))}

         </div>
         <a href="" className="btn classes-all-btn">
            view all
         </a>
      </section>
   );
};

export default YogaClasses;

// {/* <div className="class-like">
//                         <HeartIcon />
//                         {/* <img src="./images/heart-empty.svg" alt="" className="class-like-icon" /> */}
//                         {/* <i><AiOutlineHeart/></i> */}
//                      </div> */}
