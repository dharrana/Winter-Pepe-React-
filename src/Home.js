// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file

const Home = ({ userData }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to Home</h2>
        <p>Name: {userData.name}</p>
        <p>Age: {userData.age}</p>
        <p>Email: {userData.email}</p>
        <p>Address: {userData.address}</p>
      </div>
    </div>
  );
};

export default Home;
