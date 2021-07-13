import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.IS_IT_DEV === 'true' && <header>Em desenvolvimento</header>}
      <StrangerThings />
    </div>
  );
}

export default App;
