import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const { REACT_APP_DEV_MODE } = process.env;
function App() {
  return REACT_APP_DEV_MODE ? (
    <div className="App">
      <p>Em Desenvolvimento</p>
      <StrangerThings />
    </div>
  ) : (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

export default App;
