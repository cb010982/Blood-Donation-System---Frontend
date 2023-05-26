/*import React from "react";
import "./Dashboards.css";
import Navigation from "./Navigation";
import  profilepic from "./images/common.png";

function Dashboards(props) {

  let choice = 'donor';
  let content = '';

  switch(choice){
    case 'donor':
      content = <div>
      <Navigation user="donor"/>
      <div className="maincontainer">
        <div className="dashboard">
          <h2 className="subheading">YOUR DASHBOARD</h2>
          <div className='iconImage'>
            <img src={profilepic} className='donorIcon' />
            </div>
        </div>
        <div className="dashboardinfo">
          <h3 className="finalheading">PERSONAL INFORMATION</h3>
          <ul>
          <div class="leftcolumn">
            <li className="list">
            Name: <span>{props.name}</span>
            </li>
            <li className="list">
            Donor Number: {props.number}             
            </li>
            </div>
            <div class="rightcolumn">
            <li className="list">
            Date Of Birth: {props.date}
            </li>
            <li className="list">
            Blood Type:{props.bloodType}
            </li>
            </div>
            <div class="middlecolumn1">
            <li className="list">
            Address: {props.address}    
            </li>
            </div>
            <div class="middlecolumn2">
            <li className="list">
            Telephone: {props.telephone}        
            </li>
            </div>
          </ul>
        </div>
      </div>
</div>
  break;
  case 'admin':
    content=<div>
    <Navigation user="admin"/>
    <div className="maincontainer">
      <div className="dashboard">
        <h1 className="firstheading">WELCOME {props.name}!</h1>
        <h2 className="subheading">YOUR DASHBOARD</h2>
        <div className='iconImage'>
            <img src={profilepic}  className='adminIcon' />
            </div>
      </div>
      <div className="dashboardinfo">
        <h3 className="finalheading">PERSONAL INFORMATION</h3>
        <ul>
          <li className="list">
            NAME: {props.name}
          </li>
          <hr/>
          <div class="table">
          <li className="list">
            Number of pending hospital requests   {props.pendinghospital}
          </li>
          <li className="list">
          Number of pending blood bank requests   {props.pendingbloodbank}
          </li>
          <li className="list">
          Number of accepted hospital requests  {props.acceptedhospital}
          </li>
          <li className="list">
          Number of accepted blood bank requests  {props.acceptedbloodbank}
          </li>
          </div>
        </ul>
      </div>
    </div>
</div>
break;
case 'hospital':
  content=<div>
   <Navigation user="hospital"/>
  <div className="maincontainer">
    <div className="dashboard">
      <h1 className="firstheading">WELCOME {props.name}!</h1>
      <h2 className="subheading">YOUR DASHBOARD</h2>
      <div className='iconImage'>
            <img src={profilepic} className='hospitalIcon' />
            </div>
    </div>
    <div className="dashboardinfo">
      <h3 className="finalheading">PERSONAL INFORMATION</h3>
      <ul>
        <li className="list">
          NAME OF HOSPITAL: {props.name}
        </li>
        <li className="list">
         DISTRICT OF THE HOSPITAL: {props.district}
        </li>
        <li className="list">
          TELEPHONE NUMBER: {props.telephone}
        </li>
        <li className="list">
          ADDRESS: {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;
case 'bloodbank':
  content=<div>
         <Navigation user="bloodbank"/>
  <div className="maincontainer">
    <div className="dashboard">
      <h1 className="firstheading">WELCOME {props.name}!</h1>
      <h2 className="subheading">YOUR DASHBOARD</h2>
      <div className='iconImage'>
            <img src={profilepic} className='bloodBankIcon' />
            </div>
    </div>
    <div className="dashboardinfo">
      <h3 className="finalheading">PERSONAL INFORMATION</h3>
      <ul>
        <li className="list">
          NAME OF BLOOD BANK: {props.name}
        </li>
        <li className="list">
         DISTRICT OF BLOOD BANK:{props.district}
        </li>
        <li className="list">
          TELEPHONE:{props.telephone}
        </li>
        <li className="list">
          ADDRESS: {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;
  }
  return (
<div>
{content}
</div>
  );
}

export default Dashboards;
*/

import React from "react";
import "./Dashboards.css";
import Navigation from "./Navigation";
import profilepic from "./images/common.png";


function Dashboards(props) {
 const UserType = {
   DONOR: 'donor',
   ADMIN: 'admin',
   HOSPITAL: 'hospital',
   BLOODBANK: 'bloodbank'
};

const choice = UserType.DONOR;
let content = null;

if (choice === UserType.DONOR) {
content = (
<div>
<Navigation user={UserType.DONOR} />
<div className="maincontainer">
<button className="Logoutdonor">Logout</button>
<div className="dashboardinfo">
<h3 className="finalheading">Personal Information</h3>
<ul>
<div className="leftcolumn1">
<li className="list">
 NAME <i className="fas fa-user icon-left1"></i><span className="innertext">hi</span>
</li>
</div>
<div className="rightcolumn1">
<li className="list">
 DATE OF BIRTH <i className="fas fa-calendar-alt icon-left2"></i><span className="innertext">hi</span>
</li>
</div>
<div className="rightcolumn1">
<li className="list">
 BLOOD TYPE<i className="fas fa-tint icon-left3"></i><span className="innertext">hi</span>
</li>
</div>
<div className="finalcolumn2">
<li className="list">
 TELEPHONE <i className="fas fa-phone icon-left4"></i> <span className="innertext">hi</span>
</li>
</div>
<div className="finalcolumn1">
<li className="list">
 ADDRESS <i className="fas fa-map-marker-alt icon-left5"></i><span className="innertext">hi</span>
</li>
</div>
</ul>
</div>
</div>
</div>
);
} else if (choice === UserType.ADMIN) {
content = (
<div>
<Navigation user={UserType.ADMIN} />
<div className="maincontainer">
<button className="Logoutadmin">Logout</button>
<div className="dashboardinfo">
<h3 className="finalheading">PERSONAL INFORMATION</h3>
<ul>
<div className="leftcolumn1">
<li className="list">
 NAME <i className="fas fa-user icon-left6"></i><span className="innertext">hi</span>
</li>
</div>

<div className="admincolumn">
<li className="requestlist">
<span className="number">09</span><br/><i className="fas fa-bolt icon-left7"/>Number of pending hospital requests
</li>
<hr/>
<li className="requestlist">
<span className="number">90</span><br/><i className="fas fa-bolt icon-left7"/>Number of pending blood bank requests 
</li>
<hr/>
<li className="requestlist" >
<span className="number">80</span><br/><i className="fas fa-bolt icon-left7"/>Number of accepted hospital requests 
</li>
<hr/>
<li className="requestlist">
<span className="number">78</span><br/><i className="fas fa-bolt icon-left7"/>Number of accepted blood bank requests 
</li>
</div>

</ul>
</div>

</div>
</div>
);
}  else if (choice === UserType.HOSPITAL) {
  content = (
  <div>
  <Navigation user={UserType.HOSPITAL} />
<div className="maincontainer">
<button className="Logouthospital">Logout</button>
<div className="dashboardinfo">
<h3 className="finalheading">PERSONAL INFORMATION</h3>
  <ul>
  <div className="leftcolumn1">
<li className="list">
  NAME OF HOSPITAL <i className="fa fa-hospital icon-left8"></i><span className="innertext">hi</span>
  </li>
  </div>
  <div className="leftcolumn2">
  <li className="list">
 ADDRESS <i className="fas fa-map-marker-alt icon-left9"></i><span className="innertext">hi</span>
  </li>
  </div>
  <div className="rightcolumn1">
  <li className="list">
  TELEPHONE NUMBER <i className="fas fa-phone icon-left10"></i> <span className="innertext">hi</span>
  </li>
  </div>
  <div className="rightcolumn2">
  <li className="list">
  DISTRICT OF THE HOSPITAL <i className="fa fa-location-arrow icon-left11"></i> <span className="innertext">hi</span>
  </li>
  </div>
  </ul>
  </div>
  </div>
  </div>
);
}   else if (choice === UserType.BLOODBANK) {
  content = (
  <div>
  <Navigation user={UserType.BLOODBANK} />
  <div className="maincontainer">
<button className="Logoutbloodbank">Logout</button>
<div className="dashboardinfo">
<h3 className="finalheading">PERSONAL INFORMATION</h3>
    <ul>
    <div className="leftcolumn1">
    <li className="list">
    NAME OF BLOOD BANK<i className="fas fa-hospital icon-left12"></i><span className="innertext">hi</span>
   </li>
   </div>
   <div className="leftcolumn2">
    <li className="list">
    DISTRICT OF BLOOD BANK<i className="fas fa-location-arrow icon-left13"></i><span className="innertext">hi</span>
    </li>
    </div>
    <div className="rightcolumn1">
    <li className="list">
  TELEPHONE<i className="fas fa-phone icon-left14"></i><span className="innertext">hi</span>
    </li>
    </div>
    <div className="rightcolumn2">
    <li className="list">
  ADDRESS<i className="fas fa-map-marker-alt icon-left15"></i><span className="innertext">hi</span>
    </li>
    </div>
    </ul>
    </div>
  </div>
</div>
);
}

return (
<div>
{content}
</div>
);
}

export default Dashboards