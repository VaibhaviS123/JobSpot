import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobDetails() {
  const [job, setJob] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selectedJob"));
    if (selected) {
      setJob(selected);
    }
  }, []);

  const isProfileComplete = (profile) => {
    return (
      profile &&
      profile.fullName &&
      profile.phone &&
      profile.address &&
      profile.qualification &&
      profile.experience &&
      profile.resume &&
      profile.skills &&
      profile.skills.length > 0
    );
  };

  const onclick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user?.email;

    if (email) {
      const profile = JSON.parse(localStorage.getItem(`profile_${email}`));
      if (isProfileComplete(profile)) {
        navigate("/application"); // Open Application page if profile is complete
      } else {
        alert("Please complete your profile before applying.");
        navigate("/profile"); // Redirect to Profile page if incomplete
      }
    } else {
      alert("User not logged in.");
      navigate("/login"); // Redirect to login if user not found
    }
  };

  return (
   <div className='Main'>
    <div className='login-bg'>
      <div className='FullPage'>
        <div className='Mid-box'>
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company_name}</p>
          <p><strong>Location:</strong> {job.candidate_required_location}</p>
          <p><strong>Type:</strong> {job.job_type}</p>
          <p><strong>Category:</strong> {job.category}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <button onClick={onclick} className='Apply'>Apply</button>
        </div>
      </div>
    </div>
    </div>
  );
}
