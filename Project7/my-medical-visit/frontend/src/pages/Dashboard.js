import React from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaPowerOff  } from 'react-icons/fa';
import PatientDashboard from './PatientDashboard';
import DoctorDashboard from './DoctorDashboard';
import '../css/Dashboard.css'

function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="top-bar">
        <div className="icon-button" onClick={() => navigate("/Dashboard")}>
          <FaHome />
        </div>
        <div className="icon-button" onClick={() => navigate("/Logout")}>
          <FaPowerOff  />
        </div>

      </div>
      <h1 className="welcome-message">
          Welcome to the Dashboard, {user ? user.name : 'Guest'}!
      </h1>

      {user.typeData === 'doctor' ? <DoctorDashboard /> : <PatientDashboard />} 

    </div>
  );
}

export default Dashboard;
