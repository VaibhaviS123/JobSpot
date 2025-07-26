import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState("");

  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  const [certificate, setCertificate] = useState("");
  const [certificatesList, setCertificatesList] = useState([]);

  // Load email and profile data based on current user's email
  useEffect(() => {
    const savedEmail = JSON.parse(localStorage.getItem("user"))?.email;
    if (savedEmail) {
      setEmail(savedEmail);

      const userProfileData = localStorage.getItem(`profile_${savedEmail}`);
      if (userProfileData) {
        const data = JSON.parse(userProfileData);
        setFullName(data.fullName || "");
        setPhone(data.phone || "");
        setAddress(data.address || "");
        setQualification(data.qualification || "");
        setExperience(data.experience || "");
        setResume(data.resume || "");
        setSkillsList(data.skills || []);
        setCertificatesList(data.certificates || []);
      }
    }
  }, []);

  // Save profile to local storage under current user's email
  const handleSave = (e) => {
    e.preventDefault();
    const profileData = {
      email,
      fullName,
      phone,
      address,
      qualification,
      experience,
      resume,
      skills: skillsList,
      certificates: certificatesList,
    };

    // Save data under specific email key
    localStorage.setItem(`profile_${email}`, JSON.stringify(profileData));

    // Confirmation and redirect
    const confirm = window.confirm("Profile saved successfully! ");
    if (confirm) {
      navigate("/dashboard");
    }
  };

  const handleAddSkill = () => {
    if (skill.trim() !== "") {
      setSkillsList([...skillsList, skill.trim()]);
      setSkill("");
    }
  };

  const handleAddCertificate = () => {
    
    if (certificate.trim() !== "") {
      setCertificatesList([...certificatesList, certificate.trim()]);
      setCertificate("");
    }
  };

  return (
    <div className='Main'>
    <div className="Profile">
      <h2 className="heading">Profile Page</h2>

      <div className="formGroup">
        <label>Email:</label>
        <input type="email" value={email} readOnly className="input" />
      </div>

      <div className="formGroup">
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input"
        />
      </div>

      <div className="formGroup">
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
           className="input"
        />
      </div>

      <div className="formGroup">
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
           className="input"
        />
      </div>

      <div className="formGroup">
        <label>Qualification:</label>
        <input
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="input"
        />
      </div>

      <div className="formGroup">
        <label>Experience:</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="input"
        />
      </div>

      <div className="formGroup">
        <label>Resume (Link or Summary):</label>
        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          className="textarea"
        />
      </div>

      <div className="formGroup">
        <label>Add Skill:</label>
        <div className="rows">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="input"
          />
          <button onClick={handleAddSkill} className="buttons">
            Add
          </button>
        </div>
        <ul>
          {skillsList.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="formGroup">
        <label>Add Certificate:</label>
        <div className="rows">
          <input
            type="text"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
           className="input"
          />
          <button onClick={handleAddCertificate} className="buttons">
            Add
          </button>
        </div>
        <ul>
          {certificatesList.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSave} className="saveButton">
        Save Profile
      </button>
    </div>
    </div>
  );
};

 

export default ProfilePage;