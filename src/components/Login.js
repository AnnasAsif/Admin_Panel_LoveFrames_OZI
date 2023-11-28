import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here using 'username' and 'password' state values
    console.log(username);
    console.log(password);
  };
  const responseGoogle = (response) => {
    console.log(response); // Handle Google login response here
    // You can extract user details from the 'response' object
  };

  return (
    
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      <GoogleLogin
        clientId="22450592410-2iuabmab9m6bsfv83s68sa85v3g0js79.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} // Handle failure (optional)
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
