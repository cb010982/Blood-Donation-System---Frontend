
import React, { useState } from "react";

const Page = {
  LOGIN: 'login',
  SIGNUP: 'signup', 
  DASHBOARD: "dashboard",
  NAVIGATION: "navigation",
  HOSPITALPENDING: "hospitalpending",
  BLOODBANKPENDING:"bloodbankpending",
  HOSPITALACCEPTED:"hospitalaccepted",
  BLOODBANKACCEPTED: "bloodbankaccepted",
};

function AdminRequests (props) {
 
  if (props.page === Page.NAVIGATION) {
    return (
      <ul className="sidebarnav">
      <h2 className="myac"> MY ACCOUNT </h2>
      <li className="lists">
        <a href="/admindashboard" className="link">
        <i className="fas fa-info-circle"></i> 
          ADMIN DASHBOARD
        </a>
      </li>
      <li className="lists">
        <i className="fas fa-clock"></i> 
        <button>PENDING REQUESTS</button> 
       <ul>
          <li className="link">
           <i className="fas fa-hospital"></i>
          <a href="/hospitalpending" >HOSPITAL</a>
          </li>
          <li className="link">
          <i className="fas fa-medkit"></i>
          <a href="/bloodbankpending">BLOOD BANK</a>
          </li>
        </ul>
      </li>
      <li className="lists">
         <i className="fas fa-check-circle"></i> 
          <button>ACCEPTED REQUESTS</button>
       <ul>
          <li className="link">
          <i className="fas fa-hospital"></i>
          <a href="/hospitalaccepted" >HOSPITAL</a>
          </li>
          <li className="link">
          <i className="fas fa-medkit"></i>
          <a href="/bloodbankaccepted" >BLOOD BANK</a>
          </li>
        </ul>
      </li>
      <li className="lists">
        <a href="/SignUp" className="link">
        <i className="fas fa-sign-out-alt"></i>
        <a href="/donorSignUpPage" >LOG OUT </a>
        </a>
      </li>
    </ul>
  );
}
if(props.page === Page.HOSPITALACCEPTED ||props.page === Page.BLOODBANKPENDING||props.page === Page.BLOODBANKACCEPTED||props.page === Page.HOSPITALPENDING){
  const requestsTable = [
    {
      tableName: Page.HOSPITALACCEPTED,
   
      fields: [
      { name: 'hospital1', telephone:'0123123123',location:'location1'},
      { name: 'hospital2', telephone:'0123123123',location:'location1'},
    ],
    },
    {
      tableName: Page.HOSPITALPENDING,
      fields: [
        { name: 'hospital4', telephone:'0123123123',location:'location1'},
        { name: 'hospital3', telephone:'0123123123',location:'location1'},
     ],
    },
    {
      tableName: Page.BLOODBANKACCEPTED,
      fields: [
      { name: 'bloodBank1', telephone:'0123123123',location:'location1'},
      { name: 'bloodBank2', telephone:'0123123123',location:'location1'},
    ],
    },
    {
      tableName: Page.BLOODBANKPENDING,
      fields: [
        { name: 'bloodBank3', telephone:'0123123123',location:'location1'},
        { name: 'bloodBank4', telephone:'0123123123',location:'location1'},
    ],
    },
  ];
  const filteredTable = requestsTable.filter(request => request.tableName === props.page);
 
return(
  <div>
    <div>
   <h2>{props.page}</h2>
    {filteredTable[0].fields.length === 0 ? (
      <div>
      <div className="heading-row">
      <div className="heading">Name</div>
      <div className="heading">Telephone Number</div>
      <div className="heading">Location</div>
    </div>
      <p>No new requests</p>
      </div>
    ) : (
      <>
        <div className="heading-row">
          <div className="heading">Name</div>
          <div className="heading">Telephone Number</div>
          <div className="heading">Location</div>
        </div>
        {filteredTable.map((request, index) => (
          <div key={index}>
            {request.fields.map((field, fieldIndex) => (
              <div key={fieldIndex}>
                <div>{field.name}</div>
                <div>{field.telephone}</div>
                <div>{field.location}</div>
                {(props.page === Page.HOSPITALPENDING || props.page === Page.BLOODBANKPENDING) && (
                  <>
                    <button>Accept</button>
                    <button>Decline</button>
                  </>
                )}
                {(props.page !== Page.HOSPITALPENDING && props.page !== Page.BLOODBANKPENDING) && (
                  <button>Decline</button>
                )}
                <hr />
              </div>
            ))}
          </div>
        ))}
      </>
    )}
  </div>
 
  </div>
    
)


}

}
export default AdminRequests;
