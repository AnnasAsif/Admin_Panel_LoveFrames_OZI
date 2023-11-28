import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Your admin login logic here using 'adminUsername' and 'adminPassword' state values
  };

  return (
    <div>
      <h1>Admin Login Page</h1>
      <form onSubmit={handleAdminLogin}>
        <input
          type="text"
          placeholder="Admin Username"
          value={adminUsername}
          onChange={(e) => setAdminUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Admin Password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
};

export default AdminLogin;
