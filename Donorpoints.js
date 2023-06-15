import React, { useState } from "react";
import Navigation from "./Navigation";
import "./Donorpoints.css";
import rewardpic from "./images/rewardimage2.png";
import axios from "axios";

export default function Donorpoints(props) {
  let newusername = 123456789002;

  const [data, setData] = useState([]);
  const [points, setPoints] = useState([]);
  const sum = points.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  axios.get(`http://localhost:8070/donation/`).then((response) => {
    setData(response.data);
    const donationUser = response.data.find(
      (blood) => blood.nic === newusername
    );
    if (donationUser) {
      setPoints(donationUser.pints);
    } else {
      console.log("not found");
    }
  });

  return (
    <div>
      <Navigation user="donor" />

      <img src={rewardpic} className="reward" />
      <div className="box">
        <br />
        <div className="border">
          <p className="paragraph">DONOR POINTS EARNED ARE</p>
          <p className="numberpoint">{sum}</p>
        </div>
      </div>
    </div>
  );
}
