import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
export default function WelComePage() {
  return (
    <>
    <div className='Main'>
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'}}>
    <div className="welcome-bg">
      <div  style={{display:"flex", justifyContent:"center", alignContent:"center",position:"relative"}}>
        <div style={{height:"43vh", width:"100%",textAlign:"center",margin:"10px",position:"absolute",fontSize:"100px",fontWeight:"bold",marginTop:"30px"}}>
          🧑‍💻 Job Tracker
        </div>
    <h1 style={{fontFamily:"Poppins",fontSize:"3rem", color:"white",textAlign:"center",fontWeight:"500",marginLeft:"34px",marginTop:"29vh",marginBottom:"3rem"}}>
         Track your job application with ease
    </h1>
    </div>
     <div style={{display:"flex", justifyContent:"center",alignContent:"center",marginTop:"40px",gap:"25px"}}>
      <Link to="/login">
      <button style={{width:"10vw",height:"10vh",border:"none",borderRadius:"10px",fontSize:"1.1rem",color:"black", fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 6px 20px rgba(0,0,0,0.2)",backgroundColor:"var(--primary-color)"}}>
        Login
      </button>
      </Link>
      <Link to="/register">
       <button style={{width:"10vw",height:"10vh",border:"none",borderRadius:"10px",fontSize:"1.1rem",color:"black",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 6px 20px rgba(0,0,0,0.2)",backgroundColor:"var(--primary-color)"}}>
        Register
      </button>
      </Link>
     </div>
      <marquee direction="left" scrollamount="15" style={{fontSize:"3rem",color:"#ffffff",marginTop:"25px"}}>Your  personal job search assistant - track every opportunity with ease</marquee>
      <h1 style={{textAlign:"center",color:"black",marginTop:"12px"}}>Feactures</h1>
     <section className='features'>
      <div className='feature-card'>
        <h3>
         📌 Track Job Applications
        </h3>
        <p>
          Stay on top of all your applications in one place.
        </p>
      </div>
      <div className='feature-card'>
        <h3>
          📅 Interview Scheduler
        </h3>
        <p> Never miss a follow-up or deadline again</p>
      </div>
       <div className='feature-card'>
        <h3>
            📈 Analytics
        </h3>
        <p>
          See where you're getting the most traction
        </p>
      </div>
     </section>
     <footer  style={{ textAlign:"center",fontSize:"1rem" }}>
         © 2025 🧑‍💻 Job Tracker · All rights reserved.
     </footer>
    </div>
    </div>
    </div>
    </>
  )
}
