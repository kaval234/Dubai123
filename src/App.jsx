import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Eventpage from './components/Eventpage/Eventpage';
import Invitationpage from './components/Invitationpage/Invitationpage';
// import Newpage from './components/Newpage'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Eventpage />} />
        <Route path="/invitationpage" element={<Invitationpage />} />
        {/* <Route path="/Newpage" element={<Newpage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;





