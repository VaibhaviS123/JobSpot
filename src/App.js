import './App.css';
import {Routes,Route} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import WelComePage from './Pages/WelComePage';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import JobDetails from './Pages/JobDetails';
import Application from './Pages/Application';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelComePage/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/resetpassword" element={<ResetPassword/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/jobdetails" element={<JobDetails/>}/>
          <Route path="/application" element={<Application/>}/>
      </Routes>
    </div>
  );
}

export default App;

