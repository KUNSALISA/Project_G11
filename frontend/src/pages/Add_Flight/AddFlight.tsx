import React from 'react';
import './AddFlight.css';
import FF from './assets/FFF.png';
import PP from './assets/PPP.jpg';

const AddFlight: React.FC = () => {
  return (
    <div className="container">
      <div className="title">ADD FLIGHT</div>
      <div className="box box1" />
      <div className="box box2" />
      <div className="box box3" />
      <div className="box box4" />
      <div className="box box5" />
      <div className="box box6" />
      <div className="box box7" />
      <div className="box box8" />
      <div className="box box9" />
      <div className="text text1">FlightCode</div>
      <div className="text text2">Flying From</div>
      <div className="text text3">Going To</div>
      <div className="text text4">Schedule Start</div>
      <div className="text text5">Schedule End</div>
      <div className="text text6">Hour</div>
      <div className="text text7">Cost</div>
      <div className="text text8">Point</div>
      <div className="text text9">Type</div>
      <div className="box box10" />
      <div className="text text10">Airline_ID</div>
      <div className="save-text">SAVE</div>
      <div className="header">
        <div className="header-background" />
        <img className="header-image" src={FF} alt="Header Image" />
        <div className="header-profile">
          <div className="header-profile-background" />
          <img className="header-profile-image" src={PP} alt="Profile Image" />
        </div>
      </div>
      <div className="button home-button">
        <div className="button-background">Home</div>
      </div>
      <div className="button member-button">
        <div className="button-background">MEMBER</div>
      </div>
      <div className="notification">
        <div className="notification-icon" />
      </div>
      <div className="button save-button">
        <div className="button-background">SAVE</div>
      </div>
    </div>
  );
};

export default AddFlight;
