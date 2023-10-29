import React, { useState, useEffect } from "react";
import {  NavLink, Outlet } from "react-router-dom";
import "../css/Home.css";



const Home = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
      },[]);
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">Welcome {user?.name} !</h1>
      </div>
      <div className="subcontainer">
        <nav className="navbar">
          <ul className="navbarList">
            <li className="navbarItem">
              <NavLink to="/info" className="navbarOption">
                Info
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink to="/todos" className="navbarOption">
                Todos
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink to="/posts" className="navbarOption">
                Posts
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink to="/albums" className="navbarOption">
                Albums
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink to="/logout" className="navbarOption">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="outlet">
          <Outlet user={user}/>
        </div>      
      </div>
       
    </div>
  );
};

export default Home;

