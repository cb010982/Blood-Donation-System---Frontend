
import Location2 from './Location2';
import BloodCountChart from './BloodCountChart';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Location1 from './Location1';
import Donorpoints from './Donorpoints';
import Dashboards from './Dashboards';
import Navigation from './Navigation';
import Table from './Table';
import SignUp from './SignUp';
import Acceptedrequests from './Acceptedrequests';
import Pendingrequests from './Pendingrequests';
import FAQs from './FAQs';
import Search from './Search';
import LoginAndSignUp from './LoginAndSignUp';


function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Navigation user="home"/>
        <LoginAndSignUp page="donorSignup"/>
      </Route>
    <Route path='/donorLoginPage'>
       <Navigation user="home"/>
       <LoginAndSignUp page="donorLogin"/>
    </Route>
    <Route path='/adminLoginPage'>
       <Navigation user="home"/>
      <LoginAndSignUp page="adminLogin"/>
    </Route>
    <Route path='/hospitalLoginPage'>
       <Navigation user="home"/>
       <LoginAndSignUp page="hospitalLogin"/>
    </Route>
   <Route path='/bloodBankLoginPage'>
      <Navigation user="home"/>
      <LoginAndSignUp page="bloodBankLogin"/>
   </Route>
   <Route path='/donorSignUpPage'>
      <Navigation user="home"/>
      <LoginAndSignUp page="donorSignup"/>
   </Route>
   <Route path='/adminSignUpPage'>
     <Navigation user="home"/>
     <LoginAndSignUp page="adminSignup"/>
   </Route>
  <Route path='/hospitalSignUpPage'>
     <Navigation user="home"/>
     <LoginAndSignUp page="hospitalSignup"/>
  </Route>
  <Route path='/bloodBankSignUpPage'>
      <Navigation user="home"/>
      <LoginAndSignUp page="bloodBankSignup"/>
  </Route>
      {/*<Route exact path='/'>
      <Dashboards/>
  </Route>*/}
      <Route path='/Location1'>
        <Location1/>
      </Route>
      <Route path='/Location2'>
        <Navigation user="donor"/>
        <Location2/>
        <Table tableName="DONOR LOCATION"/>
      </Route>
      <Route path='/Donorpoints'>
        <Donorpoints/>
      </Route>
      <Route path='/Dashboards'>
        <Dashboards/>
      </Route>
      <Route path='/BloodBankChart'>
        <Navigation user="bloodbank"/>
        <BloodCountChart/>
      </Route>
      <Route path='/HospitalChart'>
      <Navigation user="hospital"/>
        <BloodCountChart/>
      </Route>
      <Route path='/Navigation'>
        <Navigation/>
      </Route>
      <Route path='/Table'>
        <Table/>
      </Route>
      <Route path='/SignUp'>
        <SignUp/>
      </Route>
      <Route path='/Acceptedrequests'>
        <Acceptedrequests/>
      </Route>
      <Route path='/Pendingrequests'>
        <Pendingrequests/>
      </Route>
      <Route path='/FAQs'>
        <FAQs/>
      </Route>
      <Route path='/Search'>
        <Search/>
      </Route>
      <Route path='/BloodBankSearch'>
        <Navigation user="hospital"/>
        <Table tableName="BLOOD BANK SEARCH"/>
      </Route>
      <Route path='/Donorsearch'>
      <Navigation user="bloodbank"/>
        <Table tableName="DONOR SEARCH"/>
      </Route>
      <Route path='/Donorhistory'>
      <Navigation user="donor"/>
        <Table tableName="DONOR HISTORY"/>
      </Route>
      <div className='foot'>
      <footer></footer>
      </div>
    </Router>
  );
}

export default App;
