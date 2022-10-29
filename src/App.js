import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import RegisterSection from './components/RegisterSection';
import LoginSection from './components/LoginSection';
import About from './About';
import DashBoard from './main/Home';
import RegisterStudent from './main/Register';
import Profile from "./main/Profile"
import Attendance from "./main/Attendance"
import Settings from "./main/Settings"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterSection />} />
        <Route path='/login' element={<LoginSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/app' element={<DashBoard />} />
        <Route path='/app/register' element={<RegisterStudent />} />
        <Route path='/app/profile' element={<Profile />} />
        <Route path='/app/attendance' element={<Attendance />} />
        <Route path='/app/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;