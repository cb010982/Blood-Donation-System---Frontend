import React,{useState} from 'react'

export default function Donor(props) {
  let NIC = '';
  let FullName = '';
  let UserName = '';
  let Gender='';
  let BloodType='A+';
  let District='Ampara';
  let HospitalName='';
  let BloodBankName='';
  let BirthDate='';
  let Address='';
  let Telephone='';
  let Password='';

  const FORM_NAME = {DONOR_LOGIN: 'donorLogin',DONOR_SIGNUP: 'donorSignup',ADMIN_LOGIN: 'adminLogin',ADMIN_SIGNUP: 'adminSignup',
    HOSPITAL_LOGIN: 'hospitalLogin',HOSPITAL_SIGNUP: 'hospitalSignup',BLOODBANK_LOGIN: 'bloodBankLogin',BLOODBANK_SIGNUP: 'bloodBankSignup',};
  
  const INPUT_TYPE = {TEXT: 'text',PASSWORD: 'password',SELECT: 'select',DATE: 'date',RADIO: 'radio',TEXTAREA: 'textarea',};
  
  const forms = [
    { formName: FORM_NAME.DONOR_SIGNUP,
      requiredFields: ['nic', 'telephone', 'password', 'fullname', 'dateOfBirth'],
      fields: [
        { name: 'nic', label:'NIC',type: INPUT_TYPE.TEXT, placeholder: 'Enter NIC' },
        { name: 'fullname', label:'Full Name',type: INPUT_TYPE.TEXT, placeholder: 'Enter Full Name' },
        { 
          name: 'gender',
          label:'Gender',
          type: INPUT_TYPE.RADIO,
          placeholder: 'Gender',
          options: ['Male', 'Female'],
        },
        { name: 'dateOfBirth', type: INPUT_TYPE.DATE, placeholder: 'Enter Date of Birth' },
        { 
          name: 'bloodType',
          label:'Blood Type',
          type: INPUT_TYPE.SELECT,
          placeholder: 'Blood Type',
          options: ['A+', 'A-', 'O-', 'O+', 'AB+', 'AB-', 'B-', 'B+','unknown'],
        },
        { name: 'telephone', label:'Telephone Number', type: INPUT_TYPE.TEXT, placeholder: 'Enter Telephone Number' },
        { name: 'donorAddress',label:'Address', type: INPUT_TYPE.TEXTAREA, placeholder: 'Enter Address' },
        { name: 'password',label:'Password', type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
      ],
    },
    {
      formName: FORM_NAME.DONOR_LOGIN,
      requiredFields: ['nic', 'loginPassword'],
      fields: [
        { name: 'nic', label:'NIC', type: INPUT_TYPE.TEXT, placeholder: 'Enter NIC' },
        { name: 'loginPassword',label:'Password', type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
      ],
    },
    {
        formName: FORM_NAME.ADMIN_SIGNUP,
        requiredFields: ['username','password'],
        fields: [
          
          { name: 'username', label:'Username',type: INPUT_TYPE.TEXT, placeholder: 'Enter  Username' },
          { name: 'password', label:'Password',type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
      {
        formName: FORM_NAME.ADMIN_LOGIN,
        requiredFields: ['username','loginPassword'],
        fields: [
          
          { name: 'username', label:'Username',type: INPUT_TYPE.TEXT, placeholder: 'Enter  Username' },
          { name: 'loginPassword', label:'Password',type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
      {
        formName: FORM_NAME.HOSPITAL_SIGNUP,
        requiredFields: ['nameOfHospital', 'telephone', 'password', 'username', 'address'],
        fields: [
          { name: 'username',label:'Username', type: INPUT_TYPE.TEXT, placeholder: 'Enter username' },
          { name: 'nameOfHospital',label:'Name Of Hospital', type: INPUT_TYPE.TEXT, placeholder: 'Enter Name Of Hospital' },
          {
            name: 'district',
            label:'District Located In',
            type: INPUT_TYPE.SELECT,
            options: ['Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota','Jaffna',
            'Kalutara', 'Kandy', 'Kegalla', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara','Moneragala','Mullaitivu', 
            'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
          ],
          },
          { name: 'telephone', label:'Telephone Number',type: INPUT_TYPE.TEXT, placeholder: 'Enter Telephone Number' },
          { name: 'address',label:'Addres', type: INPUT_TYPE.TEXTAREA, placeholder: 'Enter Address' },
          { name: 'password',label:'Password', type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
      {
        formName: FORM_NAME.HOSPITAL_LOGIN,
        requiredFields: ['username', 'loginPassword'],
        fields: [
          { name: 'username',label:'Username', type: INPUT_TYPE.TEXT, placeholder: 'Enter Username' },
          { name: 'loginPassword',label:'Password', type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
      {
        formName: FORM_NAME.BLOODBANK_SIGNUP,
        requiredFields: ['nameOfBloodBank', 'telephone', 'password', 'username', 'address'],
        fields: [
            { name: 'username',label:'Username', type: INPUT_TYPE.TEXT, placeholder: 'Enter username' },
            { name: 'nameOfBloodBank',label:'Name Of Blood Bank', type: INPUT_TYPE.TEXT, placeholder: 'Enter Name Of Blood Bank' },
            {
              name: 'district',
              label:'District',
              type: INPUT_TYPE.SELECT,
              options: ['Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota','Jaffna',
              'Kalutara', 'Kandy', 'Kegalla', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara','Moneragala','Mullaitivu', 
              'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
            ],
            },
            { name: 'telephone', label:'Telephone',type: INPUT_TYPE.TEXT, placeholder: 'Enter Telephone Number' },
            { name: 'address',label:'Address', type: INPUT_TYPE.TEXTAREA, placeholder: 'Enter Address' },
            { name: 'password', label:'Password',type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
      {
        formName: FORM_NAME.BLOODBANK_LOGIN,
        requiredFields: ['username', 'loginPassword'],
        fields: [
          { name: 'username',label:'Username', type: INPUT_TYPE.TEXT, placeholder: 'Enter Username' },
          { name: 'loginPassword',label:'Password', type: INPUT_TYPE.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
  ];
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (fieldName, value) => {
      const newFormValues = {
        ...formValues,
        [fieldName]: value,
      };
      setFormValues(newFormValues);
  
      const error = validateField(fieldName, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error,
      }));
    };
  
    const validateField = (fieldName, value) => {
     if (!value && fieldName != 'donorAddress') {
            if (fieldName === 'nameOfBloodBank') {
              return 'Name Of Blood Bank is required.';
            } else if (fieldName === 'nameOfHospital') {
              return 'Name Of Hospital is required.';
            }else if (fieldName === 'loginPassword') {
                return 'Password is required.';
            } else {
              return `${fieldName} is required.`;
            }
      }if (fieldName === 'nic' && (value.length !== 12 || !/^\d+$/.test(value))) {
        return 'NIC should be a 12-digit number.';
      }if (fieldName === 'telephone' && (value.length !== 10 || !/^\d+$/.test(value))) {
        return 'Telephone should be a 10-digit number.';
      }if (fieldName === 'dateOfBirth') {
        const currentDate = new Date();
        const dob = new Date(value);
  
        if (currentDate.getFullYear() - dob.getFullYear() < 18) {
          return 'You must be at least 18 years old to sign up.';
        }
      }if (
        fieldName === 'password' &&
        (value.length < 8 || !/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/\d/.test(value))
      ) {
        return 'Password should be at least 8 characters long and contain a mix of uppercase, lowercase, digits, and symbols.';
      }
  
      return '';
    };
  
    const validateForm = () => {
      const currentForm = forms.find((form) => form.formName === props.page);
      const requiredFields = currentForm.requiredFields;
      const newErrors = {};
  
      requiredFields.forEach((field) => {
        const error = validateField(field, formValues[field]);
        if (error) {
          newErrors[field] = error;
        }
      });
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const formSubmitted = (formValues, formName) => {
     
      if (formName === FORM_NAME.DONOR_SIGNUP) {
       console.log('Donor Signup form submitted');
       for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
            if (key === 'nic') {NIC = formValues[key];}
            if (key === 'fullname') {FullName = formValues[key];}
            if (key === 'gender') {Gender = formValues[key];}
            if (key === 'dateOfBirth') {BirthDate = formValues[key]}
            if (key === 'bloodType') {BloodType = formValues[key];}
            if (key === 'telephone') {Telephone = formValues[key];}
            if (key === 'donorAddress') {Address = formValues[key];}
            if (key === 'password') {Password= formValues[key];} }}
            console.log(NIC);
            console.log(FullName);
            console.log(Gender);
            console.log(BirthDate);
            console.log(BloodType);
            console.log(Telephone);
            console.log(Address);
            console.log(Password);
          }
      else if (formName === FORM_NAME.DONOR_LOGIN) {
          console.log('Donor Login form submitted');
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              if (key === 'nic') {NIC = formValues[key];}
              if (key === 'loginPassword') {Password= formValues[key];}}}
          console.log(NIC);
          console.log(Password);
      
      } else if (formName === FORM_NAME.ADMIN_SIGNUP) {
        console.log('Admin Signup form submitted');
        for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
            if (key === 'username') {UserName = formValues[key];}
            if (key === 'password') {Password= formValues[key];}}}
        console.log(UserName);
        console.log(Password);
        
      } else if (formName === FORM_NAME.ADMIN_LOGIN) {
          console.log('Admin Login form submitted');
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              if (key === 'username') {UserName = formValues[key];}
              if (key === 'loginPassword') {Password= formValues[key];}}}
          console.log(UserName);
          console.log(Password);
       
      }
      else if (formName === FORM_NAME.HOSPITAL_SIGNUP) {
        console.log('Admin Signup form submitted');
        for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
            if (key === 'username') {UserName = formValues[key];}
            if (key === 'nameOfHospital'){HospitalName= formValues[key];}
            if (key === 'district') {District= formValues[key];}
            if (key === 'telephone') {Telephone = formValues[key];}
            if (key === 'address') {Address= formValues[key];}
            if (key === 'password') {Password= formValues[key];}}}
        console.log(UserName);
        console.log(HospitalName);
        console.log(District);
        console.log(Telephone);
        console.log(Address); 
        console.log(Password);
        
        
      } else if (formName === FORM_NAME.HOSPITAL_LOGIN) {
        console.log('Admin Login form submitted');
        for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
            if (key === 'username') {UserName = formValues[key];}
            if (key === 'loginPassword') {Password= formValues[key];}}}
        console.log(UserName);
        console.log(Password);
      }
      else if (formName === FORM_NAME.BLOODBANK_SIGNUP) {
        console.log('Admin Signup form submitted');
        for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
            if (key === 'username') {UserName = formValues[key];}
            if (key === 'nameOfBloodBank'){BloodBankName= formValues[key];}
            if (key === 'district') {District= formValues[key];}
            if (key === 'telephone') {Telephone = formValues[key];}
            if (key === 'address') {Address= formValues[key];}
            if (key === 'password') {Password= formValues[key];}}}
        console.log(UserName);
        console.log(BloodBankName);
        console.log(District);
        console.log(Telephone);
        console.log(Address); 
        console.log(Password);
        
      } else if (formName === FORM_NAME.BLOODBANK_LOGIN) {
        console.log('Admin Login form submitted');
        for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
            if (key === 'username') {UserName = formValues[key];}
            if (key === 'loginPassword') {Password= formValues[key];}}}
        console.log(UserName);
        console.log(Password);
      }
    
    };
   
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const isFormValid = validateForm();
    
      if (isFormValid) {
      
        formSubmitted(formValues, props.page);
      }
    };

    const currentForm = forms.find((form) => form.formName === props.page);
  
  return (
    <div>
        <ul >
                <li className="lists">
                  <a href="/donorLoginPage" className="link">DONOR</a>
                </li>
                <li className="lists">
                  <a href="/adminLoginPage" className="link">ADMIN</a>
                </li>
                <li className="lists">
                  <a href="/hospitalLoginPage" className="link">HOSPITAL</a>
                </li>
                <li className="lists">
                  <a href="/bloodBankLoginPage" className="link">BLOOD BANK</a>
                </li>
             
             
                <li className="lists">
                  <a href="/donorSignUpPage" className="link">DONOR</a>
                </li>
                <li className="lists">
                  <a href="/adminSignUpPage" className="link">ADMIN</a>
                </li>
                <li className="lists">
                  <a href="/hospitalSignUpPage" className="link">HOSPITAL</a>
                </li>
                <li className="lists">
                  <a href="/bloodBankSignUpPage" className="link">BLOOD BANK</a>
                </li>
                
            
                </ul>
            <div>

            <form onSubmit={handleSubmit}>
              <h2>{props.page}</h2>
              {currentForm.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === INPUT_TYPE.TEXT && (
                <input placeholder={field.placeholder} type="text" id={field.name} name={field.name} value={formValues[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                />)}
              {field.type === INPUT_TYPE.PASSWORD && (
                <input placeholder={field.placeholder} type="password" id={field.name} name={field.name} value={formValues[field.name] || ''}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />)}
              {field.type === INPUT_TYPE.SELECT && (
                <select id={field.name} name={field.name} value={formValues[field.name] || ''} onChange={(e) => handleInputChange(field.name, e.target.value)}>
                {field.options.map((option) => (<option key={option} value={option}>{option}</option>))}</select>)}
              {field.type === INPUT_TYPE.DATE && (
                <input type="date" id={field.name} name={field.name} value={formValues[field.name] || ''} onChange={(e) => handleInputChange(field.name, e.target.value)}/>)}
              {field.type === INPUT_TYPE.RADIO && (
                <div>
                  {field.options.map((option) => (
                    <div key={option}>
                      <input type="radio" id={option} name={field.name} value={option} checked={formValues[field.name] === option}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}/>
                      <label htmlFor={option}>{option}</label>
                    </div>))}
                </div>
        )}
              {field.type === INPUT_TYPE.TEXTAREA && (
                <textarea placeholder={field.placeholder} id={field.name} name={field.name} value={formValues[field.name] || ''}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}/>)}
              {errors[field.name] && <p className="error">{errors[field.name]}</p>}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
    </div>
     
    </div> 
    
  )
}
