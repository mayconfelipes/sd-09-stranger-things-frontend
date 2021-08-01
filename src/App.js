import React from 'react';
import './App.css';
require('dotenv').config();

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { process.env.REACT_APP_DEVELOPMENT && <span>Em desenvolvimento</span> }
      <StrangerThings />
    </div>
  );
}

export default App;
