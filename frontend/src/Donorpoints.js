import React from "react";
import Navigation from "./Navigation";
import './Donorpoints.css';
import rewardpic from './images/rewardimage2.png';
import { UserTypes } from "./utils/Enums";


export default function Donorpoints() {
     return (
       <div class="mainbox">
         <Navigation user={UserTypes.DONOR}/>
         <img src={rewardpic} className='reward' />
         <div className="box">
          <br/>
          <div className="border">
         <p className="paragraph">DONOR POINTS EARNED ARE</p>
         </div>  <p className="numberpoint">60</p>
         </div>
       </div>
     );
}