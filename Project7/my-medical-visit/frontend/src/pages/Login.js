// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaUserMd } from 'react-icons/fa';
import { useUser } from './UserContext';

import '../css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Helper function to format date to "yyyy-MM-dd"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleLogin = async (userType) => {
    try {
      let response = await fetch(
        `http://localhost:3001/validate_${userType}?username=${username}&password=${password}`
      );

      if (response.status === 200) {
        let userData = await response.json();

        // Map properties based on user type
        let mappedUserData = {
          id: userData[`${userType}_id`],
          name: userData[`${userType}_name`],
          address: userData[`${userType}_address`],
          phone: userData[`${userType}_phone`],
          typeData: userType,
        };

        if (userType === 'patient') {
          mappedUserData.blood_type = userData.patient_blood_type;
          mappedUserData.birthdate = formatDate(userData.birth_date);
        } else if (userType === 'doctor') {
          mappedUserData.speciality_id = userData.doctor_speciality_id;
        }

        login(mappedUserData);
        navigate("/Dashboard");
      } else {
        setError("Your Username or Password is wrong!");
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className='center-container '>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="username">
            <FaUser /> Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">
            <FaLock /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="button-container">
            <button
              type="button"
              className="login-button"
              onClick={() => handleLogin('doctor')}
            >
              <FaUserMd /> I'm a Doctor
            </button>

            <button
              type="button"
              className="login-button"
              onClick={() => handleLogin('patient')}
            >
              <FaUser /> I'm a Patient
            </button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
