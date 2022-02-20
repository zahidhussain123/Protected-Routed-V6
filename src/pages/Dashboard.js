import React from "react";
import {  Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setAuth }) => {
  const navigate =useNavigate()
const handleClick=()=>{
  setAuth(true)
  navigate('/profile')
}
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 3
            </a>
          </li>
        </ul>
      </nav>

      <div className="form-group">
        <label htmlFor="usr">Name:</label>
        <input type="text" className="form-control" id="usr" />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" />
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-secondary my-2 mx-5"
      >
        Login
      </button>
    
    </div>
  );
};

export default Dashboard;
