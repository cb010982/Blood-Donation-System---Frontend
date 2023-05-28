import React,{ useRef }from 'react';
import './HomePage.css';
import Navigation from './Navigation';
import donorImg from './images/homeImage.webp';
import bloodLab from './images/bloodLab.webp';


export default function HomePage() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

    <div className='homeContainer'>
        <div className='side'><Navigation user='home'/></div>
        <div className='homeInfoContainer'>
        
        
          <div ref={targetRef} className='infoContainer1'>
            <div className='infoItem'>
               <div >
                  <h2 className='homeHeading'>Calling all blood donors!</h2>
                  <hr/>
                  <ul className='info'>
                   <li>
                     <p>
                       For blood donors, our user-friendly website allows easy registration and profile creation. 
                    </p>
                   </li>
                   <li>
                    <p>
                      A platform providing comprehensive information on the locations of blood banks near you. 
                     
                    </p>
                  </li>
                  <li>
                    <p>
                     
                      With just a few clicks, you can find the nearest blood banks where you can donate blood.
                    </p>
                  </li>
                 </ul>
               </div>
               <div className='infoContainer' ><img src={donorImg}/></div>

            </div>
           </div>

           <div ref={targetRef} className='infoContainer1'>
            <div className='infoItem'>
            <div className='infoContainer' ><img src={bloodLab}/></div>
            <div >
             <h2 className='homeHeading'>Hospitals & Blood Banks</h2>
             <hr/>
             <ul className='info2'>
              <li>
                <p>
                Streamlined inventory management and supply chain for hospitals and blood banks.
                </p>
              </li>




             <li>
             <p>
             Real-time monitoring and tracking of available blood units and overall stock levels.
              </p>
           </li>
           <li>
             <p>
             Access to crucial data for informed decision-making and ensuring optimal blood supply.
              </p>
           </li>
           <li>
             <p>
             Empowering hospitals and blood banks to deliver efficient healthcare services.
              </p>
           </li>
            </ul>
            </div>
          

            </div>
           </div>
          

          {/*<div ref={targetRef} className='infoContainer1'>
            <div className='info'>
             <h2>Blood Donors</h2>
             <ul>
              <li>
                <p>
                For blood donors, our user-friendly website allows easy registration and profile creation. 
                </p>
              </li>
             <li>
             <p>
                Donors can provide their contact information, blood type, and other relevant details, enabling them to be part of our
                extensive network of volunteers. 
             </p>
             </li>
            </ul>
            </div>
            <div className='infoContainer' >Image</div>
            
</div>*/}
</div>
        
       
        
    </div>
  )
}
