import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const isDevMode = process.env.DEV_MODE || false;

function App() {
  return isDevMode ? (<div>Em desenvolvimento</div>) : (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

export default App;
