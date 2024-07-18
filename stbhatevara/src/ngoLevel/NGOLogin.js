import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NGOLogin.css';
import { useNavigate } from 'react-router-dom';

const NGOLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/user/login', {
        username,
        password
      });
      // Handle the response data as needed
      console.log(response.data);
      navigate("/studentlist")
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="NGO/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default NGOLogin;
