import React from 'react';
import './Component.css';
import FF from './assets/FFF.png';
import PP from './assets/PPP.jpg';

const Component: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={FF} alt="Logo" />
        <div className="profile">
          <img className="profile-img" src={PP} alt="Profile" />
        </div>
      </div>
      <div className="nav">
        <div className="nav-item">Flights</div>
        <div className="nav-item">Add flights</div>
        <div className="nav-item">MEMBER</div>
      </div>
      <div className="info-box">
        <div className="search-flight">Search Flight</div>
      </div>
      <div className="flight-list">
        <div className="flight-item">
          <div className="flight-header">Flight Code</div>
          <div className="flight-header">Flying From</div>
          <div className="flight-header">Going To</div>
          <div className="flight-header">Schedule Start</div>
          <div className="flight-header">Schedule End</div>
          <div className="flight-header">Airline</div>
        </div>
        <div className="flight-item">
          <div className="flight-header">Flight Code</div>
          <div className="flight-header">Flying From</div>
          <div className="flight-header">Going To</div>
          <div className="flight-header">Schedule Start</div>
          <div className="flight-header">Schedule End</div>
          <div className="flight-header">Airline</div>
          <div className="edit-button">EDIT</div>
        </div>
        <div className="flight-item">
          <div className="flight-header">Flight Code</div>
          <div className="flight-header">Flying From</div>
          <div className="flight-header">Going To</div>
          <div className="flight-header">Schedule Start</div>
          <div className="flight-header">Schedule End</div>
          <div className="flight-header">Airline</div>
          <div className="edit-button">EDIT</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
