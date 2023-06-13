import React, { useState, useEffect } from "react";
import "./BloodCountChart.css";
import { InputType,InputFieldName } from "./utils/Enums";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";
import { validateField } from './Validation';

function BloodCountChart() {
  const [bloodCounts, setBloodCounts] = useState([
    { name: "A+", count: 0 },
    { name: "A-", count: 0 },
    { name: "B+", count: 0 },
    { name: "B-", count: 0 },
    { name: "AB+", count: 0 },
    { name: "AB-", count: 0 },
    { name: "O+", count: 0 },
    { name: "O-", count: 0 },
  ]);

  const [isCriticalEditing, setIsCriticalEditing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [customThreshold, setCustomThreshold] = useState("");
  const [criticalError, setCriticalError]=useState();
  const initialRedThreshold = localStorage.getItem('redThreshold') || '0';
  const [redThreshold, setRedThreshold] = useState(parseFloat(initialRedThreshold));

useEffect(() => {
  const initialRedThreshold = localStorage.getItem('redThreshold') || '0';
  setRedThreshold(parseFloat(initialRedThreshold));
  setCustomThreshold(initialRedThreshold);
}, []);



function handleCriticalEdit() {
  setIsCriticalEditing(true);
}

function handleCriticalSubmit() {
  const error = validateField(InputFieldName.CRITICALLEVEL, customThreshold);
  if (error.length === 0) {
    setIsCriticalEditing(false);
    localStorage.setItem('redThreshold', customThreshold);
    setRedThreshold(parseFloat(customThreshold));
  } else {
    setCriticalError(error);
  }
}

  function handleCountUpdate(index, value) {
    if (isNaN(value)) {
      value = 0;
    }
    const newValue = value < 0 ? 0 : value;

    setBloodCounts((prevState) =>
      prevState.map((count, i) => (i === index ? { ...count, count: newValue } : count))
    );
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSubmit() {
    setIsEditing(false);
    console.log(bloodCounts);
  }

  function handleThresholdChange(e) {
    const value = e.target.value;
    setCustomThreshold(value);
    const error = validateField(InputFieldName.CRITICALLEVEL, value);
    if (error.length === 0) {
      setCriticalError('');
      const threshold = parseFloat(value);
      setRedThreshold(threshold);
    } else {
      setCriticalError(error);
    }
  }

  
  

  return (
    <div>
<div className="thresholdclass">
        <label className="label">
          Set a critical level to your blood stocks:
        </label>
        <div className="inputcontainer">
          {criticalError && <div className="error">{criticalError}</div>}
          {isCriticalEditing ? (
            <input
              type={InputType.NUMBER}
              min={0}
              value={customThreshold}
              className="thresholdinputfield"
              onChange={handleThresholdChange}
              onWheel={(e) => e.target.blur()}
            />
          ) : (
            <span>{customThreshold}</span>
          )}

          {isCriticalEditing ? (
            <button className="submit" onClick={handleCriticalSubmit}>
              Submit
            </button>
          ) : (
            <button className="edit" onClick={handleCriticalEdit}>
              Edit
            </button>
          )}
        </div>
         </div>
    <div className="borderbox">
      <p className="frequencytext">Frequency of blood group (In Pints) </p>
      <div className="Barchart">
        <BarChart
          width={600}
          height={400}
          data={bloodCounts}
          barCategoryGap={18}
          barGap={9}
          borderRadius={80}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid stroke="white" strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" className="bar">
  {bloodCounts.map((bloodCount, index) => {
    const barColor = bloodCount.count > redThreshold ? "green" : "red";
    return <Cell key={index} fill={barColor} />;
  })}
</Bar>
        </BarChart>
        <p className="Bloodtypetext">Blood Type</p>
      </div>
      <div>
        <div className="flex-container">
          <div className="circle green"></div>
          <p className="infoone">Stable</p>
        </div>
        <div>
          <div className="circle red"></div>
          <p className="infotwo">Critical</p>
        </div>
      </div>
      <div className="IncrementDecrementButtons">
        <p className="bloodcount">Blood Count</p>

        {bloodCounts.map((bloodCountno, index) => (
          <div key={index} className="numberborder">
            <span className="bloodtypes">{bloodCountno.name}</span>
            <div className="bloodlevelcontainer">
            {isEditing ? (
              <input
                className="bloodlabels"
                type={InputType.NUMBER}
                step="0.01"
                value={bloodCountno.count}
                onChange={(e) => handleCountUpdate(index, parseFloat(e.target.value))}
                onWheel={(e) => e.target.blur()}
              />
            ) : (
              <span>{bloodCountno.count}</span>
            )}
          </div>
          </div>
        ))}

        {isEditing ? (
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        )}

        </div>
      </div>
    </div>
  );
}

export default BloodCountChart;


/*
import React, { useState  } from "react";
import "./BloodCountChart.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";


function BloodCountChart() {
  const [bloodCounts, setBloodCounts] = useState([
    { name: "A+", count: 0 },
    { name: "A-", count: 0 },
    { name: "B+", count: 0 },
    { name: "B-", count: 0 },
    { name: "AB+", count: 0 },
    { name: "AB-", count: 0 },
    { name: "O+", count: 0 },
    { name: "O-", count: 0 },
  ]);

  function handleCountUpdate(index, value) {
    if (isNaN(value)) {
      value = 0;
    }
    const newValue = value < 0 ? 0 : value;

    setBloodCounts((prevState) =>
      prevState.map(
        (count, i) => (i === index ? { ...count, count: newValue } : count),
        console.log(bloodCounts),
        console.log(index),
        console.log(prevState),
        console.log(value)
      )
    );
  }
  
  return (
    <div className="borderbox">
      <p className="frequencytext">Frequency of blood group (In Pints) </p>
      <div className="Barchart">
        <BarChart       
      width={600}
      height={400}
      data={bloodCounts}
      barCategoryGap={18}
      barGap={9}
      border-radius={80}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
          <CartesianGrid stroke="white" strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" className="bar">
            {bloodCounts.map((bloodCount, index) => {
              const barColor = bloodCount.count > 2 ? "green" : "red";
              return <Cell key={index} fill={barColor}  />;
            })}
          </Bar>
        </BarChart>
        <p className="Bloodtypetext">Blood Type</p>
      </div>
        <div>
          <div className="circle green"></div>
          <p className="infoone">High</p>
        </div>
        <div>
          <div className="circle red"></div>
          <p className="infotwo">Low</p>
      </div>
   
      <div className="IncrementDecrementButtons">

    <p className="bloodcount">Blood Count</p>
    
  {bloodCounts.map((bloodCountno, index) => (
    console.log(bloodCountno),
    <div key={index} className="numberborder">
      <span className="bloodtypes">{bloodCountno.name}</span>
      <input className="bloodlabels"
        type="number"
        step="0.01"
        value={bloodCountno.count}
        onChange={(e) =>
          handleCountUpdate(index, parseFloat(e.target.value))
        }
        onWheel={(e) => e.target.blur()}
      />
      </div>  
  ))}

  <button className="submit" >Submit Changes</button>
</div>

</div>);}



export default BloodCountChart;



*/
