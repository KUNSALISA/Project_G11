import React from 'react';
import FF from './assets/FFF.png';
import PP from './assets/PPP.jpg';
import './Edit.css';

const Edit: React.FC = () => {
  return (
    <div className="container">
      <div className="box" style={{ left: 422, top: 270 }} />
      <div className="box" style={{ left: 426, top: 381 }} />
      <div className="box" style={{ left: 946, top: 381 }} />
      <div className="box" style={{ left: 422, top: 481 }} />
      <div className="box" style={{ left: 946, top: 481 }} />
      <div className="box" style={{ left: 426, top: 581 }} />
      <div className="box" style={{ left: 426, top: 681 }} />
      <div className="box" style={{ left: 946, top: 675 }} />
      <div className="box" style={{ left: 946, top: 270 }} />
      
      <div className="text" style={{ left: 233, top: 282 }}>FlightCode</div>
      <div className="text" style={{ left: 217, top: 393 }}>Flying From</div>
      <div className="text" style={{ left: 794, top: 393 }}>Going To</div>
      <div className="box" style={{ left: 946, top: 581 }} />
      <div className="text" style={{ left: 768, top: 593 }}>Airline_ID</div>
      <div className="text" style={{ left: 180, top: 493 }}>Schedule Start</div>
      <div className="text" style={{ left: 720, top: 493 }}>Schedule End</div>
      <div className="text" style={{ left: 326, top: 593 }}>Hour</div>
      <div className="text" style={{ left: 340, top: 687 }}>Cost</div>
      <div className="text" style={{ left: 848, top: 687 }}>Point</div>
      <div className="text" style={{ left: 849, top: 282 }}>Type</div>

      <div className="header">
        <div className="header-bg" />
        <img className="logo" src="FFF" alt="logo" />
        <div className="profile">
          <div className="profile-bg" />
          <img className="profile-pic" src="PPP" alt="profile" />
        </div>
      </div>

      <div className="menu-item" style={{ left: 317, top: 63 }}>
        <div className="menu-bg" />
        <div className="menu-text">Home</div>
      </div>

      <div className="menu-item" style={{ left: 1155, top: 63 }}>
        <div className="menu-bg" />
        <div className="menu-text">MEMBER</div>
      </div>

      <div className="camera-icon">
        <div className="camera-lens" />
      </div>

      <div className="button" style={{ left: 704, top: 831 }}>
        <div className="button-bg save-button" />
        <div className="button-text">SAVE</div>
      </div>

      <div className="button" style={{ left: 991, top: 831 }}>
        <div className="button-bg delete-button" />
        <div className="button-text">DELETE</div>
      </div>
    </div>
  );
};

export default Edit;
