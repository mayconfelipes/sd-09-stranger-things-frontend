import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const isDevMode = process.env.DEV_MODE === 'true';
console.log(isDevMode);
function App() {
  return isDevMode
    ? (
      <div>
        <p>Em desenvolvimento</p>
      </div>)
    : (
      <div className="App">
        <StrangerThings />
      </div>
    );
}

export default App;
