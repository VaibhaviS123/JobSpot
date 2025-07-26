import React, { useEffect, useState } from 'react'
import '../App.css';
import {Link, Navigate, useNavigate} from 'react-router-dom';

export default function Login() {
const [email, setemail] = useState('');
const navigate= useNavigate();
const [password, setpassword] = useState('')
const onclick =()=>
{
 const storedUser = JSON.parse(localStorage.getItem("user"));
  if(email===''|| password===''){
    alert("Enetr email and password")
  }
  else if(storedUser){
     navigate("/dashboard");
  }
  else{
    alert("Envalid email and password");
  }
};
  return (
    <>
    <div className='Main'>
    <div className='login-bg'>
    <div className='FullPage'>
        <div className='Mid-box'>
        <h3 style={{fontSize:"3rem", marginTop:"56px",marginBottom:"16px"}}>LOGIN</h3>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"12px"}}>
        <p style={{fontSize:"1.2rem", marginTop:"12px", fontWeight:"500", width:"100px",marginRight:"10px",textAlign:"right"}}>Email:</p>
        <input onChange={(e)=>{
          setemail(e.target.value)
        }} autoComplete="off" style={{flex:"1", padding:"5px", marginRight:"10px"}} placeholder="Enter Your Email"id="email" type="text"  />
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"12px",marginBottom:"16px"}}>
            <p style={{fontSize:"1.2rem", marginTop:"12px", fontWeight:"500", width:"100px",marginRight:"10px",textAlign:"right"}}>Password:</p>
        <input onChange={(e)=>{
          setpassword(e.target.value)
        }} autoComplete="off"style={{flex:"1", padding:"5px", marginRight:"10px"}} id="password" type="password" placeholder='Enter your password' />
        </div>
        <button className='LoginBtn' onClick={onclick}>Login</button>
       <div style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"12px",marginBottom:"16px",marginTop:"18px"}}>
         <Link to="/ResetPassword"><p className='forgot'>Forgot Password?</p></Link>
       </div>
    </div>
    </div>
     </div>
     </div>
     </>
  )
}
