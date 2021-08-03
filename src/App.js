import React from 'react';
import StrangerThings from './components/StrangerThings';
import './App.css';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      { process.env.DEVELOPMENT_MODE && <p>Em desenvolvimento</p> }
      <StrangerThings />
    </div>
  );
}

export default App;
