import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
