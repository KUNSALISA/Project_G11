import React from 'react';
import './FlightDate.css';
import FF from './assets/FFF.png';
import PP from './assets/PPP.jpg';

const FlightDate: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-background"></div>
        <img className="header-logo" src={FF} alt="Logo" />
        <div className="profile-icon">
          <div className="profile-icon-background"></div>
          <img className="profile-icon-image" src={PP} alt="Profile" />
        </div>
      </div>
      <div className="nav-button home">
        <div className="nav-button-background">
          <div className="nav-button-text">Home</div>
        </div>
      </div>
      <div className="nav-button member">
        <div className="nav-button-background">
          <div className="nav-button-text">MEMBER</div>
        </div>
      </div>
      <div className="notification-bell">
        <div className="notification-icon"></div>
      </div>
      <div className="table-container">
        <div className="table-header">
          <div className="table-header-item">Flight Code</div>
          <div className="table-header-item">Flying From</div>
          <div className="table-header-item">Going To</div>
          <div className="table-header-item">Schedule Start</div>
          <div className="table-header-item">Schedule End</div>
          <div className="table-header-item">Airline</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Flight Code</div>
          <div className="table-cell">Flying From</div>
          <div className="table-cell">Going To</div>
          <div className="table-cell">Schedule Start</div>
          <div className="table-cell">Schedule End</div>
          <div className="table-cell">Airline</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Flight Code</div>
          <div className="table-cell">Flying From</div>
          <div className="table-cell">Going To</div>
          <div className="table-cell">Schedule Start</div>
          <div className="table-cell">Schedule End</div>
          <div className="table-cell">Airline</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Flight Code</div>
          <div className="table-cell">Flying From</div>
          <div className="table-cell">Going To</div>
          <div className="table-cell">Schedule Start</div>
          <div className="table-cell">Schedule End</div>
          <div className="table-cell">Airline</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Flight Code</div>
          <div className="table-cell">Flying From</div>
          <div className="table-cell">Going To</div>
          <div className="table-cell">Schedule Start</div>
          <div className="table-cell">Schedule End</div>
          <div className="table-cell">Airline</div>
        </div>
      </div>
      <div className="filter-button all">
        <div className="filter-button-background">ALL</div>
      </div>
      <div className="filter-button add">
        <div className="filter-button-background">ADD</div>
      </div>
      <div className="search-bar"></div>
      <div className="search-button">
        <div className="search-button-background">
          <div className="search-button-text">search</div>
        </div>
      </div>
      <div className="date-picker"></div>
      <div className="date-label">date</div>
    </div>
  );
};

export default FlightDate;
