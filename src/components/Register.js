import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import {useParams} from 'react-router-dom'

const Register = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    // Your registration logic here using 'newUsername' and 'newPassword' state values
  };

  const id = useParams(); // Access the 'id' parameter from the URL
  console.log('>>>>>>>>>>>>>>>',id);
  return (
    
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="New Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
