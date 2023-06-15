import React, { Suspense } from 'react';
import './About.css';
import Navigation from './Navigation';
import donorImg from './images/mainImg2.webp';
import mainHomeImage from './images/mainImg1.png';
import bloodAnimation from './images/bloodAnimation.mp4'

export default function About(props) {
 
  return (
    <>
    <div className='about'>
      <div className="sidenav"><Navigation user={props.user}/></div>
      <div className="homeInfoSection">
            <div className="mainImageContainer">
               <img src={mainHomeImage} alt="Your Image" className='mainImage'/>
            </div>
           
            <div className="UserInfoSection">
               <div className="item">
                 <div className="infoContainer">
                  
                  <div className="info">
                    <h2>"Calling All Blood Donors!"</h2>
                    <hr className='infoLine'></hr>
                    <ul className="points" >
                      <li><p> For blood donors, our user-friendly website allows easy registration and profile creation. </p></li>
                      <li><p> A platform providing comprehensive information on the locations of blood donation centers near you. </p></li>
                      <li><p> With just a few clicks, you can find the nearest blood donation centers where you can donate blood.</p></li>
                   </ul>
                  </div>
                  <div>
               
                    <  img src={donorImg} className="donorImg"/></div>
                 </div>
               </div>
              
               <div className="item">
               <div className="infoContainer">
                  <div>
                    
                  <video className="bloodLabImg" autoPlay loop muted>

                     <source src={bloodAnimation} type="video/mp4" />
               </video>
                  </div>
                  <div className="info">
                    <h2>"Hospitals & Blood Banks"</h2>
                    <hr className='infoLine'></hr>
                    <ul className="points" >
                      <li><p> Streamlined inventory management and supply chain for hospitals and blood banks.</p></li>
                      <li><p> Real-time monitoring and tracking of available blood units and overall stock levels. </p></li>
                      <li><p> Access to crucial data for informed decision-making and ensuring optimal blood supply.</p></li>
                      <li><p> Empowering hospitals and blood banks to deliver efficient healthcare services. </p></li>
                   </ul>
                  </div>
                
                 
                 </div>
                  
               </div>
           
            </div>
            
      </div>
    </div>
     
    </>
 
  )
}
 