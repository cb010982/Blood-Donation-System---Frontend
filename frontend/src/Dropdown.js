import './Dropdown.css';
import React, { useState } from "react";
import { DropDown } from "./utils/Enums";

function Dropdown(props) {
  const { value, onChange } = props;
  const [selectedOption, setSelectedOption] = useState(value);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(event);
  };

    if (props.dropdown === DropDown.DISTRICTDROPDOWN) {
      return (
        <div>
          <select value={selectedOption} onChange={handleSelectChange} className='dropdown' >
          <option hidden value="" className="default">
           Select a district
           </option>
            <option value="Ampara">Ampara</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Badulla">Badulla</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Colombo">Colombo</option>
            <option value="Galle">Galle</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Hambantota">Hambantota</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Kegalla">Kegalla</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Mannar">Mannar</option>
            <option value="Matale">Matale</option>
            <option value="Matara">Matara</option>
            <option value="Moneragala">Moneragala</option>
            <option value="Mullaitivu">Mullaitivu</option>
            <option value="Nuwara Eliya">Nuwara Eliya</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Vavuniya">Vavuniya</option>
          </select>
        </div>
      );
    }

    if (props.dropdown === DropDown.BLOODTYPEDROPDOWN) {

      return (
        <div>
        <select value={selectedOption} onChange={handleSelectChange} className='dropdown'>
        <option hidden value="" className="default">
           Select a blood type
        </option>   
        <option value="aPositive">A+</option>
        <option value="aNegative">A-</option>
        <option value="bPositive">B+</option>
        <option value="bNegative">B-</option>
        <option value="abPositive">AB+</option>
        <option value="abNegative">AB-</option>
        <option value="oPositive">O+</option>
        <option value="oNegative">O-</option>
      </select>
        </div>
      );
    
  };


  }

export default Dropdown;