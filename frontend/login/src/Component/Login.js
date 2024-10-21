// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setMessage('Login successful!');
            console.log('Full response: ', res);
            // Save JWT token or redirect user as needed
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            // Handle errors properly by checking for `error.response`
            if (error.res && error.res.data) {
                console.error('Error response:', error.response.data);  // Log server error message
                setError(error.response.data.msg);  // Assuming the server returns a `msg` field on errors
            } else {
                console.error('Request error:', error.message);
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container-xl pb-3 pt-3 mt-5 border bg-light" style={{borderRadiu: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button className="btn btn-primary" type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p style={{ color: 'green' }}>{message}</p>}
            </form>

        </div>
    );
};

export default Login;
