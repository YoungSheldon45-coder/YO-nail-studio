import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyling from './styles/GlobalStyling';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <Router>
      <GlobalStyling />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Router>
  );
}

export default App;
