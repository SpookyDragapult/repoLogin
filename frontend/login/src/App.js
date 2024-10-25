import logo from './logo.svg';
import React from 'react';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Register from './Component/Register';
import {  Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
    

      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </div>

  );
}

export default App;
