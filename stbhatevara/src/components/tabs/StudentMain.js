import React from 'react';
import { Link } from 'react-router-dom';
import './StudentMain.css'; // Import the CSS file

const StudentMain = () => {
  return (
    <div className="auth-container">
      <header>
        <h1>Student Portal</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/renew">Renew</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default StudentMain;
