import React, { useEffect,useState } from 'react'
import '../App.css';
import {Link, useNavigate} from 'react-router-dom';
export default function () {
  const Navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const onClick=()=>
  {
  if(email===""|| password===""){
    alert("Enter Email And Password");
  }else{
    const user={
      email,
      password
    };
    localStorage.setItem("user",JSON.stringify(user));
    alert("Registered Successfully!");
   Navigate('/dashboard')
  }
  }
  return (
    <>
    <div className='Main'>
      <div className='login-bg'>
      <div className='FullPage'>
        <div className='Mid-box'>
          <h3 style={{fontSize:"3rem", marginTop:"56px",marginBottom:"16px"}}>
            REGISTER
          </h3>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"12px"}}>
        <p style={{fontSize:"1.2rem", marginTop:"12px", fontWeight:"500", width:"100px",marginRight:"10px",textAlign:"right"}}>Email:</p>
        <input onChange={(e)=>{
          setemail(e.target.value)
        }}  autoComplete="off" style={{flex:"1", padding:"5px", marginRight:"10px"}} placeholder="Enter Your Email"id="email" type="text"  />
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"12px",marginBottom:"16px"}}>
            <p style={{fontSize:"1.2rem", marginTop:"12px", fontWeight:"500", width:"100px",marginRight:"10px",textAlign:"right"}}>Password:</p>
        <input onChange={(e)=>
          setpassword(e.target.value)
        } autoComplete="off"style={{flex:"1", padding:"5px", marginRight:"10px"}} id="password" type="password" placeholder='Enter your password' />
        </div>
        <button className='LoginBtn' onClick={onClick}>Register</button>
        <h6 style={{marginTop:"12px"}}>Already have an acoount?</h6>
        <Link to='/login'>
        <button className='LoginBtn'>Login</button>
        </Link>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}
