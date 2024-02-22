// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing Router and Routes

import Navbar from './Navbar';
import Home from './Home';
import FormAction from './FormAction';

function App() {
  const [userData, setUserData] = useState({});

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Use Routes as the parent component */}
        <Routes>
          {/* Each Route component corresponds to a specific path */}
          <Route path="/" element={<Home userData={userData} />} />
          <Route path="/form" element={<FormAction onFormSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
