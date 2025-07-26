import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Application() {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email;

    if (userEmail) {
      const savedProfile = localStorage.getItem(`profile_${userEmail}`);
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile));
      }
    }
  }, []);

  const handleConfirmApply = () => {
    alert("Application Submitted!");
    navigate("/"); // or wherever you want to redirect
  };

  if (!profileData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className='Main'>
    <div className='login-bg'>
      <div className='FullPage'>
        <div className='Mid-box'>
          <h3>Confirm Application</h3>
          <p><strong>Name:</strong> {profileData.fullName}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Skills:</strong> {profileData.skills?.join(", ")}</p>
          <p><strong>Resume:</strong> {profileData.resume ? "Uploaded" : "Not uploaded"}</p>
          <button onClick={handleConfirmApply}>Submit Application</button>
        </div>
      </div>
    </div>
    </div>
  );
}
