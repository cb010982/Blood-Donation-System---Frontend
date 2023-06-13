import React,{useState,useEffect}from 'react';
import './Table.css';
import Dropdown from './Dropdown';
import { TableNames } from "./utils/Enums";
import { DropDown } from "./utils/Enums";
import { validateForm, validateField } from './Validation';



function Table({ tableName }) {

  const [inputValueArray, setInputValueArray] = useState([]);
  const [errors, setErrors] = useState({});
  const [dropdownValues, setDropdownValues] = useState({
    bloodtypedropdown: '',
    districtdropdown: '',
   
  });

  const handleDropdownChange = (event, dropdownName) => {
    const value = event.target.value;
    setDropdownValues((prevState) => ({
      ...prevState,
      [dropdownName]: value,
    }));
  };

  const bloodTypeValue = dropdownValues.bloodtypedropdown;
  const districtValue = dropdownValues.districtdropdown;
  
  /*console.log(bloodTypeValue,districtValue);*/

  const handleChange = (event, index) => {
    const value = event.target.value;
    setInputValueArray((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
    
    
  };

  const handleSubmit = (index) => {
    const startIndex = index * 4;
    const rowValues = inputValueArray.slice(startIndex, startIndex + 4);
    console.log(`Submit button clicked for index ${index + 1}`);
    console.log(rowValues[0], rowValues[1], rowValues[2], rowValues[3]);

    const formValues = {
      date: rowValues[0] || '',type: rowValues[1] || '',pints: rowValues[2] || '', reward: rowValues[3] || '',
    };

    const currentPage = tableName;

    const forms = [
      {
        formName: currentPage,
        requiredFields: ['pints', 'reward', 'type', 'date'],
      },
    ];

    const newErrors = validateForm(forms, currentPage, formValues);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [`row${index}`]: newErrors,
    }));

    if (Object.keys(newErrors).length === 0) {
      console.log(formValues); // Take values from here
    } else {
      console.log('error');
    }
  };

  const tables = {
    [TableNames.DONORHISTORY]: {
      columns: ["DATE OF DONATION", "BLOOD TYPE", "QUANTITY OF BLOOD DONATED IN PINTS","NAME OF BLOOD BANK", "LOCATION OF BLOOD BANK","CONTACT DETAILS"],
    },
    [TableNames.DONORLOCATION]:{
      columns: ["NAME OF BLOOD BANK","CONTACT DETAILS","DISTRICT","ADDRESS"],
    },
    [TableNames.DONORSEARCH]: {
      columns: ["NIC OF DONOR","DATE OF DONATION", "NAME OF DONOR", "TELEPHONE DETAILS", "ENTER BLOOD TYPE", "ENTER LOCATION OF BLOOD BANK", "ENTER AMOUNT OF BLOOD DONATED [IN PINTS]", "REWARD POINTS", "CONFIRM CHANGES"],
    },
    [TableNames.BLOODBANKSEARCH]: {
      columns: ["BLOOD BANK NAME", "BLOOD TYPE", "AMOUNT OF BLOOD","LOCATION","CONTACT DETAILS"],
    },
    [TableNames.BLOODBANKPENDING]: {
      columns: ["NAME OF BLOOD BANK", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
    [TableNames.BLOODBANKACCEPTED]: {
      columns: ["NAME OF BLOOD BANK", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
    [TableNames.HOSPITALACCEPTED]: {
      columns: ["NAME OF HOSPITAL", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
    [TableNames.HOSPITALPENDING]: {
      columns: ["NAME OF HOSPITAL", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
  };

  const tableData = tables[tableName];

  if (!tableData) {
    return <div>No table found</div>;
  }

  const { columns } = tableData;
 
  let rows;
  if (tableName === TableNames.DONORSEARCH) {
    rows = generateRows(tableName, inputValueArray, setInputValueArray, handleChange, handleSubmit,errors);
  } else {
    rows = generateRows(tableName, null, null,null,null,null);
  }

  return (
    <div>
    
        <h2 className="tablename">{tableName}</h2>
        
        <div className="tablecover">
        {(tableName === TableNames.DONORSEARCH) && (
            <input type="text" placeholder="Please type a donor name..." className="search" />
        )}
         {(tableName === TableNames.BLOODBANKSEARCH) && (
          <div className="row-container">
            <div className='dropdown5'>
            <Dropdown dropdown={DropDown.DISTRICTDROPDOWN} value={dropdownValues.districtdropdown}
            onChange={(event) => handleDropdownChange(event, DropDown.DISTRICTDROPDOWN)} />
            </div>
            <div className='dropdown4'>
            <Dropdown dropdown={DropDown.BLOODTYPEDROPDOWN} value={dropdownValues.bloodtypedropdown}
            onChange={(event) => handleDropdownChange(event,DropDown.BLOODTYPEDROPDOWN)}/>
            </div>
            <button className='submit3'>Submit</button>
          </div>
          )}
      {(tableName === TableNames.DONORLOCATION) && (
      <div className="row-container">
        <div className='dropdown3'>
        <Dropdown dropdown={DropDown.DISTRICTDROPDOWN} value={dropdownValues.districtdropdown} onChange={(event) => handleDropdownChange(event, DropDown.DISTRICTDROPDOWN) } />
        </div>
        <div>
           <button className='submit2'>Submit</button>
         </div>

        </div>
          )}

        <table className="tablemain">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          {rows.length === 0 ? (
          <p className="norows">No rows found</p>
        ) : (
          <>
          <tbody>
            {rows.map((row, rowindex) => (
              <tr key={rowindex}>
                {Object.values(row).map((cell, cellindex) => (
                  <td key={cellindex}><div className='multiline-cell'>{cell}</div></td>
                ))}
              </tr>    
            ))}
         </tbody>
          </>
        )}
        </table>
      </div>
    </div>
  );
}

function generateRows(tableName, inputValueArray,setInputValueArray, handleChange, handleSubmit,errors) {
  const rows = [];


  if (tableName === TableNames.DONORHISTORY) {
    const dateValues = ["1/2/12", "8/9/10"];
    const bloodValues = ["A+","A+"];
    const quantityValues = [1,2];
    const location=["Moratuwa","Moratuwa"];
    const nameofbloodbank=["Moratuwa Blood Bank","Moratuwa Blood Bank"];
    const contactdetails=["0000000000","1111111111"];
    const numRows = 2;
    for (let i = 0; i < numRows; i++) {
      const row = {
        "DATE OF DONATION": dateValues[i],
        "BLOOD TYPE": bloodValues[i],
        "QUANTITY OF BLOOD DONATED IN PINTS": quantityValues[i] + " pints",
        "NAME OF BLOOD BANK":nameofbloodbank[i],
        "LOCATION OF BLOOD BANK":location[i],
        "CONTACT DETAILS":contactdetails[i],
      };
      rows.push(row);
    }
  } else if (tableName === TableNames.DONORLOCATION) {
      const namebloodbank = [ "Ampara Bloodbank"];
      const contact= ["0999999999"];
      const district=["Ampara"];
      const address = ["abc"];
      const numRows = 1;
      for (let i = 0; i < numRows; i++) {
        const row = {
          "NAME OF BLOOD BANK": namebloodbank[i],
          "CONTACT DETAILS":contact[i],
          "DISTRICT":district[i],
          "ADDRESS": address[i],
        };
        rows.push(row);
      }
  } else if (tableName === TableNames.DONORSEARCH) {
    const name = ["Andy Bently", "Andy Cody"];
    const telephone = ["1111111111","2222222222"];
    const numberofRows = 2;
    const NIC = ["1111111111","2222222222"];
    const locationInput = ["Bambalapitiya","Maharagama"];
    for (let i = 0; i < numberofRows; i++) {     
      const rowErrors = errors[`row${i}`] || {};
      const row = {
        "NIC OF DONOR": NIC[i],
        "DATE OF DONATION": <>
        <input  type="date" name="date" value={inputValueArray[i * 4] || ''} onChange={(event) => handleChange(event, i * 4)} />
        {/*{rowErrors.date && <div style={{ color: 'red' }}>{rowErrors.date}</div>}*/}
        {rowErrors['date'] && <div style={{ color: 'red' }}>{rowErrors['date']}</div>}
        </>,
        "NAME OF DONOR": name[i],
        "TELEPHONE DETAILS": telephone[i],
        "ENTER BLOOD TYPE": 
        <> 
        <div className="dropdown6">
        <Dropdown dropdown='bloodtypedropdown' value={inputValueArray[i * 4 + 1] || ''} onChange={(event) => handleChange(event, i * 4 + 1)} /></div>
       {rowErrors.type && <div style={{ color: 'red' }}>{rowErrors.type}</div>}
        </>,
        "ENTER LOCATION OF BLOOD BANK": locationInput[i],
        "ENTER AMOUNT OF BLOOD DONATED [IN PINTS]":  <>
        <input type="number" min="0" value={inputValueArray[i * 4 + 2] || ''} onChange={(event) => handleChange(event, i * 4 + 2)}/>
       {rowErrors.pints && <div style={{ color: 'red' }}>{rowErrors.pints}</div>} 
        </>,
        "REWARD POINTS":<>
        <input
       type="number"
       min="0"
       value={inputValueArray[i * 4 + 3] || ''}
       onChange={(event) => handleChange(event, i * 4 + 3)}
        />
       {rowErrors.reward && <div style={{ color: 'red' }}>{rowErrors.reward}</div>} 
       </>
      ,
        "CONFIRM CHANGES": (
          <button className='submitbutton' onClick={() => handleSubmit(i)} type="submit" >Submit</button> 
        ),
      };
      rows.push(row);
    }
  } else if (tableName === TableNames.BLOODBANKSEARCH) {
    const name = ["monaragala blood bank 1", "monaragala blood bank 2"];
    const bloodtype= ["A+","A+"];
    const quantity = [1, 2];
    const contactdetails=["02222222222","1000000000"];
    const location=["Monaragala","Monaragala"];
    const numberofrows = 2;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "BLOOD BANK NAME": name[i],
        "BLOOD TYPE": bloodtype[i],
        "AMOUNT OF BLOOD": quantity[i]+" pints",
        "LOCATION":location[i],
        "CONTACT DETAILS":contactdetails[i],
      };
      rows.push(row);
    }
  }
  else if (tableName === TableNames.BLOODBANKPENDING) {
    const name_b = ["bloodbank1", "bloodbank2", "bloodbank3"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const acceptbtn_b=<button className='acceptBtn'>ACCEPT</button>
    const declinebtn_b=<button className='declineBtn'>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":<div className='acceptAndDeclineBtn'><div>{acceptbtn_b}</div><div>{declinebtn_b}</div></div>
      };
      rows.push(row);
    }
  }
 
  else if (tableName === TableNames.HOSPITALPENDING) {
    const name_b = ["hospital1", "hospital2", "hospital3"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const acceptbtn_b=<button className='acceptBtn'>ACCEPT</button>
    const declinebtn_b=<button className='declineBtn'>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":<div className='acceptAndDeclineBtn'><div>{acceptbtn_b}</div><div>{declinebtn_b}</div></div>,
      };
      rows.push(row);
    }
  }
  else if (tableName === TableNames.HOSPITALACCEPTED) {
    const name_b = ["hospital4", "hospital5", "hospital6"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const declinebtn_b=<button className='declineBtn'>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":declinebtn_b,
      };
      rows.push(row);
    }
  }
  else if (tableName === TableNames.BLOODBANKACCEPTED) {
    const name_b = ["bloodbank1", "bloodbank2", "bloodbank3"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const declinebtn_b=<button className='declineBtn'>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":declinebtn_b,
      };
      rows.push(row);
    }
  }


  return rows;
}


export default Table;
