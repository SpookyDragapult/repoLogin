// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
   // const [success, setSuccess] = useState('');
    const [message, setMessage] = useState('');

    const handleRegist = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Password does not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password});
            setMessage('Registration successful you can log in now');
            setError('');
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
            //setSuccess('');
        };

        
    };

    return (
        <div className="container-xl pb-3 pt-3 mt-5 border bg-light" style={{borderRadiu: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"}}>
            <h2>Register</h2>
            <form onSubmit={handleRegist}>
            <div className="mb-3">
                    <label className="form-label">User Name:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary" type="submit">Register</button>
                <p className="form-text">Already have an account?<Link to="/login">Login</Link></p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p style={{ color: 'green' }}>{message}</p>}
            </form>

        </div>
    );
};

export default Register;
