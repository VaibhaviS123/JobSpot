import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div className="welcome-bg">
      <div style={{ textAlign: 'center', padding: '4rem 1rem 2rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
          🧑‍💻 JobSpot
        </h1>
        <h2 style={{ fontFamily: 'Poppins', fontSize: '2rem', fontWeight: '500', color: '#fff', maxWidth: '700px', margin: '0 auto' , marginTop:"82px"}}>
          Track your job application with ease
        </h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '2rem' , marginTop:"47px"}}>
        <Link to="/login">
          <button className="LoginBtn" style={{ width: '150px', height: '50px' }}>
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="LoginBtn" style={{ width: '150px', height: '50px' }}>
            Register
          </button>
        </Link>
      </div>

      <marquee direction="left" scrollamount="15" style={{fontSize:"3rem",color:"#ffffff",marginTop:"25px"}}>
  Your personal job search assistant - track every opportunity with ease
</marquee>


      <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '1rem' }}>Features</h2>

      <section className="features">
        <div className="feature-card">
          <h3 style={{marginTop:"25px"}}>📌 Track Job Applications</h3>
          <p>Stay on top of all your applications in one place.</p>
        </div>
        <div className="feature-card">
          <h3  style={{marginTop:"25px"}}>📅 Interview Scheduler</h3>
          <p>Never miss a follow-up or deadline again.</p>
        </div>
        <div className="feature-card">
          <h3  style={{marginTop:"25px"}}>📈 Analytics</h3>
          <p>See where you're getting the most traction.</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '1rem', marginTop: '2rem', color: '#000' }}>
        © 2025 🧑‍💻 JobSpot · All rights reserved.
      </footer>
    </div>
  );
}
