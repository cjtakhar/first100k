import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'cj' && password === '35') {
      navigate('/home');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="form" onSubmit={handleLogin}>
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="form-msg">
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Login;
