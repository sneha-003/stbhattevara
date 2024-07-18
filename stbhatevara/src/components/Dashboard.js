import React from 'react';
import './Dashboard.css';
import StatusBar from './StatusBar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <StatusBar/>
      <h2>Tracking Status</h2>
      {/* Add tracking status content here */}
      <p>Student tracking status will be displayed here.</p>
    </div>
  );
}

export default Dashboard;
