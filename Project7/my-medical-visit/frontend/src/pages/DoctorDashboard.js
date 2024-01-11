import React, { useState } from 'react';
import Program from './Program';
import NewAppointement from './NewAppointement';
import UserInfos from './UserInfos'

import '../css/Dashboard.css'

function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('program');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content">
      <div className="nav">
        <div className={`nav-item ${activeTab === 'program' ? 'active' : ''}`} onClick={() => handleTabChange('program')}>
          Program </div>
        <div className={`nav-item ${activeTab === 'new_apt' ? 'active' : ''}`} onClick={() => handleTabChange('new_apt')}>
          New Appointement </div>
        <div className={`nav-item ${activeTab === 'infos' ? 'active' : ''}`} onClick={() => handleTabChange('infos')}>
          My Infos</div>
      </div>

      {activeTab === 'program' && (<div className="tab-content"><Program /></div>)}

      {activeTab === 'new_apt' && ( <div className="tab-content"><NewAppointement /></div>)}

      {activeTab === 'infos' && ( <div className="tab-content"> <UserInfos /> </div> )}

    </div>
  );
}

export default DoctorDashboard;