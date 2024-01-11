import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './pages/UserContext';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import './App.css'

// ...

function App() {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      {/*<Route path="/appointment" element={user ? <Appointment /> : <Navigate to="/login" />} />
      <Route path="/register" element={user ? <Register /> : <Navigate to="/login" />} />
      {/* Route générique */}
      <Route
        path="*"
        element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

// ...


function Root() {
  return (
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  );
}

export default Root;
