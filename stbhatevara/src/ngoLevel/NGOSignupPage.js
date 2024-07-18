// import React from 'react';
// import './SignupPage.css';

// const SignupPage = () => {
//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form>
//         <div className="form-group">
//           <label>Username</label>
//           <input type="text" placeholder="Enter username" />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter email" />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" placeholder="Enter name" />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter password" />
//         </div>
//         <div className="form-group">
//           <label>NGO</label>
//           <input type="text" placeholder="Enter NGO name" />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignupPage;



import React, { useState } from 'react';
import axios from 'axios';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

const NGOSignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [ngo, setNgo] = useState('');


  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/user/signup', {
        username,
        email,
        name,
        password,
        ngo
      });
      // Handle the response data as needed
      console.log(response.data);
      navigate("/login")
    } catch (error) {
      console.error('There was an error signing up!', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="form-group">
          <label>NGO</label>
          <input
            type="text"
            placeholder="Enter NGO name"
            value={ngo}
            onChange={(e) => setNgo(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default NGOSignupPage;
