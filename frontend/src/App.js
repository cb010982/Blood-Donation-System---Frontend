
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navigation from './Navigation';
import LoginAndSignUp from './LoginAndSignUp';
import About from "./About";
import FAQs from "./FAQs";
import Table from "./Table";
import Dashboards from "./Dashboards";
import Donorpoints from './Donorpoints';
import BloodCountChart from './BloodCountChart';
import { UserTypes } from "./utils/Enums";
import { TableNames } from "./utils/Enums";
import { FormNames } from "./utils/Enums";


function App() {
  return (
    <Router>
      <Route exact path='/'>
      <Navigation user={UserTypes.BLOODBANK} />
      </Route>
      <Route exact path='/about'>
      <About user={UserTypes.ABOUT} />
      </Route>
      <Route path='/aboutDonor'>
        <About user={UserTypes.DONOR}/>
      </Route>
      <Route path='/aboutHospital'>
        <About user={UserTypes.HOSPITAL}/>
      </Route>
      <Route path='/aboutBloodBank'>
        <About user={UserTypes.BLOODBANK}/>
      </Route>
      <Route path='/aboutAdmin'>
        <About user={UserTypes.ADMIN}/>
      </Route>
      <Route path='/FAQs'>
         <FAQs/>
      </Route>
      <Route path='/donorlocation'>
        <Navigation user={UserTypes.DONOR}/>
        <Table tableName={TableNames.DONORLOCATION}/>
      </Route>
      <Route path='/donorPoints'>
        <Donorpoints/>
      </Route>
      <Route path='/bloodBankChart'>
        <Navigation user={UserTypes.BLOODBANK}/>
        <BloodCountChart/>
      </Route>
      <Route path='/hospitalChart'>
        <Navigation user={UserTypes.HOSPITAL}/>
        <BloodCountChart/>
      </Route>

      <Route path='/donorLoginPage'>
         <LoginAndSignUp  page={FormNames.DONOR_LOGIN}/>
      </Route>
      <Route path='/donorSignUpPage'>
         <LoginAndSignUp page={FormNames.DONOR_SIGNUP}/>
      </Route>
      <Route path='/adminLoginPage'>
          <LoginAndSignUp  page={FormNames.ADMIN_LOGIN}/>
      </Route>
      <Route path='/adminSignUpPage'>
          <LoginAndSignUp page={FormNames.ADMIN_SIGNUP}/>
      </Route>
      <Route path='/hospitalLoginPage'>
          <LoginAndSignUp  page={FormNames.HOSPITAL_LOGIN}/>
      </Route>
      <Route path='/hospitalSignUpPage'>
         <LoginAndSignUp page={FormNames.HOSPITAL_SIGNUP}/>
      </Route>
      <Route path='/bloodBankLoginPage'>
         <LoginAndSignUp  page={FormNames.BLOODBANK_LOGIN}/>
      </Route>
      <Route path='/bloodBankSignUpPage'>
         <LoginAndSignUp page={FormNames.BLOODBANK_SIGNUP}/>
      </Route>

      <Route path='/donorHistory'>
         <Navigation user={UserTypes.DONOR} />
         <Table tableName={TableNames.DONORHISTORY} />
      </Route>
      <Route path='/donorSearch'>
         <Navigation user={UserTypes.BLOODBANK}/>
         <Table tableName={TableNames.DONORSEARCH}/>
      </Route>
      <Route path='/bloodBankSearch'>
         <Navigation user={UserTypes.HOSPITAL}/>
         <Table tableName={TableNames.BLOODBANKSEARCH}/>
      </Route>
      <Route path='/hospitalPending'>
         <Navigation user={UserTypes.ADMIN}/>
         <Table tableName={TableNames.HOSPITALPENDING}/>
      </Route>
      <Route path='/hospitalAccepted'>
         <Navigation user={UserTypes.ADMIN}/>
         <Table tableName={TableNames.HOSPITALACCEPTED}/>
      </Route>
      <Route path='/bloodBankPending'>
        <Navigation user={UserTypes.ADMIN}/>
        <Table tableName={TableNames.BLOODBANKPENDING}/>
      </Route>
      <Route path='/bloodBankAccepted'>
        <Navigation user={UserTypes.ADMIN}/>  
        <Table tableName={TableNames.BLOODBANKACCEPTED}/>
      </Route>


      <Route path='/donorDashboard'>
        <Dashboards user={UserTypes.DONOR}/>
      </Route>
      <Route path='/adminDashboard'>
        <Dashboards user={UserTypes.ADMIN}/>
      </Route>
      <Route path='/hospitalDashboard'>
        <Dashboards user={UserTypes.HOSPITAL}/>
      </Route>
      <Route path='/bloodBankDashboard'>
        <Dashboards user={UserTypes.BLOODBANK}/>
      </Route>
    </Router>

    
  )
}

export default App;
