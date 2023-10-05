import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom'
import List from './components/List/List';
import HeaderComponet from './components/Header/HeaderComponet';
import FoterComponent from './components/Footer/FoterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponets/CreateEmployeeComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UpadateEmployeeComponent from './components/UpdateEmployeeCommponents/UpadateEmployeeComponent';
import RegisterComponent from './components/Registercomponent/RegisterComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';

function App() {
  return (
      
    <div>
      <Router>
        <div>
       <HeaderComponet />
      <div>
       <Routes>
       <Route path='/' exact Component={LoginComponent}></Route>
       <Route path='/register' exact Component={RegisterComponent}></Route>
        {/* <Route path='/' exact Component={List}></Route> */}
        <Route path='/employees' Component={List}></Route>
        <Route path='/add-employees' Component={CreateEmployeeComponent}></Route>
        <Route path='/update-employees/:employeeId' Component={UpadateEmployeeComponent}></Route>
        </Routes>
      
      
      </div>
      {/* <FoterComponent/> */}
      </div>
      </Router>

      </div>
  );
}

export default App;
  