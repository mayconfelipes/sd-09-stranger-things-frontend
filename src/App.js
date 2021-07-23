import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { process.env.REACT_APP_ENVIROMENT ? <p>Em desenvolvimento</p> : <p /> }
      <StrangerThings />
    </div>
  );
}

export default App;
