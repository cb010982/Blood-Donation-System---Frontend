import React, { useState } from "react";
import "./Navigation.css";



function Navigation(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div>
      <button
        className={`sidebar-toggle ${isButtonClicked ? "active" : ""}`}
        onClick={toggleSideBar}
      >
        <i className={`fas ${isButtonClicked ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <div className={`sidebar ${isSideBarOpen ? "active" : ""}`}>
        {props.user === "donor" && (
          <ul className="sidebarnav">
            <li className="lists">
              <a href="/Dashboards" className="link">DONOR DASHBOARD</a>
            </li>
            <li className="lists">
              <a href="/Donorhistory" className="link">DONATION HISTORY </a>
            </li>
            <li className="lists">
              <a href="/Donorpoints" className="link">VIEW DONOR POINTS</a>
            </li >
            <li className="lists">
              <a href="/FAQS" className="link">FAQS</a>
            </li>
            <li className="lists">
              <a href="/Location1" className="link">FIND NEAREST LOCATION</a>
            </li>
            <li className="lists">
              <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "admin" && (
          <ul className="sidebarnav">
            <li className="lists">
            <a href="/Dashboards" className="link">ADMIN DASHBOARD</a>
            </li>
            <li className="lists">
            <a href="/Pendingrequests" className="link">PENDING REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
            </li >
            <li className="lists">
            <a href="/Acceptedrequests" className="link">ACCEPTED REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
            </li>
            <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "hospital" && (
          <ul className="sidebarnav">
            <li className="lists">
            <a href="/Dashboards" className="link">HOSPITAL DASHBOARD</a>
            </li>
            <li className="lists">
            <a href="/HospitalChart" className="link">BLOOD COUNT</a>
            </li>
            <li className="lists">
            <a href="/BloodBankSearch" className="link">BLOOD BANK SEARCH</a>
            </li>
            <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "bloodbank" && (
          <ul className="sidebarnav">
            <li className="lists">
              <a href="/Dashboards" className="link">DASHBOARD</a>
            </li>
            <li className="lists">
              <a href="/BloodBankChart" className="link">BLOOD CHART</a>
            </li>
            <li className="lists">
              <a href="/Donorsearch" className="link">DONOR BASE</a>
            </li>
            <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
