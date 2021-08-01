import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import TagComponent from './components/TagComponent';

require('dotenv').config();

const TagDev = process.env.TAG_DEV === 'true';

function App() {
  return (
    <div className="App">
      { TagComponent && <TagDev /> }
      <StrangerThings />
    </div>
  );
}

export default App;
