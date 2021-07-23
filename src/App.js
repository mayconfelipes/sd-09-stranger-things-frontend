import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { process.env.REACT_APP_ENVIROMENT ? <p>Em desenvolvimento</p> : null }
      <StrangerThings />
    </div>
  );
}

export default App;
