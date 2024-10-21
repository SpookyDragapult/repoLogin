import logo from './logo.svg';
import React from 'react';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
