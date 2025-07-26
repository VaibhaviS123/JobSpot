import React from 'react'
import '../App.css';
import { useState } from 'react';
export default function ResetPassword() {
   const [email, setemail] = useState('');
  const onClick =()=>{
  const storedemail = localStorage.getItem("email");
  if(email===storedemail){
    alert(`Reset link has been sent to ${email}`);
  }
  else{
    alert("Email not found .Please register first.");
  }
  setemail("");
  }
  return (
   <>
    
    <div className='Main'>
    <div className='login-bg'>
      <div className='FullPage'>
       <div className='Mid-box'>
        <h3 style={{marginTop:"43px",gap:"14px",fontSize:"2rem"}}> 
          Please enter your email 
        </h3>
        <p style={{fontSize:"1.2rem",marginTop:"40px"}}>
          We will send you a password reset link to the email. Open it and follow the instructions.
        </p>
        <input onChange={(e)=>{
          setemail(e.target.value)
        }} style={{marginTop:"33px"}} autoComplete="off" type="text" placeholder='Email' id="email" value={email}/>
        <button style={{borderRadius:"10%", fontSize:"1rem"}} onClick={onClick}>
          Send Email
        </button>
       </div>
      </div>
    </div>
    </div>
    </>
  )
}
