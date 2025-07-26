import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleJobClick =(job)=>{
    localStorage.setItem("selectedJob",JSON.stringify(job));
    navigate("/JobDetails");
  }

  useEffect(() => {
    fetch('https://remotive.com/api/remote-jobs?search=developer')
      .then(res => res.json())
      .then(data => {
        setJobs(data.jobs);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company_name.toLowerCase().includes(search.toLowerCase()) ||
    job.candidate_required_location.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading jobs...</div>;

  return (
  <div className='Main'>
    <div className="dashboard-bg">
      <div
        className="dashboard-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1em 2em',
        }}
      >
        <div style={{ flex: 1 }}></div>
        <h2 style={{ margin: 0, fontSize: '43px', textAlign: 'center', flex: '0 1 auto' }}>
          🧑‍💻 Job Tracker
        </h2>
        <Link to="/profile" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className="profile-icon"
            style={{
              background: 'white',
              borderRadius: "50%",
              fontSize: '2em',
              cursor: 'pointer'
            }}
          >
            👤
          </button>
        </Link>
      </div>
      <div className='Search-Bar'>
        <input
          type="search"
          placeholder="Search jobs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ borderRadius: "10px", fontSize: "20px" }}
        />
      </div>
      <div className="job-lists-container">
        <ul className="job-cards">
          {filteredJobs.map(job => (
            <li key={job.id} className="job-card">
              <div><strong>Position:</strong> {job.title}</div>
              <div><strong>Company:</strong> {job.company_name}</div>
              <div><strong>Location:</strong> {job.candidate_required_location}</div>
              <button className='View' onClick={()=>handleJobClick(job)}>View</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default JobDashboard;