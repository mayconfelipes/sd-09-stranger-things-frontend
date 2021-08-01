import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import DevelopmentTag from './components/DevelopmentTag';

const developmentMode = process.env.REACT_APP_DEVELOPMENT === 'true';
function App() {
  return (
    <div className="App">
      <StrangerThings />
      { developmentMode && <DevelopmentTag /> }

    </div>
  );
}

export default App;
