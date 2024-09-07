// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Edit from './pages/EDIT_flight/Edit';
// import FlightDate from './pages/Flight_date/FlightDate'; 

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Edit />} /> 
//         <Route path="/flight-date" element={<FlightDate />} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import Edit from './pages/EDIT_flight/Edit';

const App: React.FC = () => {
  return (
    <div className="app">
      <Edit />
    </div>
  );
};

export default App;