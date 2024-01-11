import React, { useState } from 'react';
import PatientAppointments from './PatientAppointments';
import PatientDocuments from './PatientDocuments';
import UserInfos from './UserInfos'
import '../css/Dashboard.css'

function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('appointments');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content">
        <div className="nav">
            <div className={`nav-item ${activeTab === 'appointments' ? 'active' : ''}`} onClick={() => handleTabChange('appointments')}>
            My Appointments </div>
            <div className={`nav-item ${activeTab === 'docs' ? 'active' : ''}`} onClick={() => handleTabChange('docs')}>
            My Documents</div>
            <div className={`nav-item ${activeTab === 'infos' ? 'active' : ''}`} onClick={() => handleTabChange('infos')}>
            My Infos</div>
        </div>

        {activeTab === 'appointments' && ( <div className="tab-content"> <PatientAppointments /> </div> )}
        {activeTab === 'docs' && ( <div className="tab-content"> <PatientDocuments /> </div> )}
        {activeTab === 'infos' && ( <div className="tab-content"> <UserInfos /> </div> )}

    </div>
  );
}

export default PatientDashboard;