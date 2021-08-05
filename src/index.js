import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import TagComponent from './components/TagComponent';

require('dotenv').config();

const TagDev = process.env.REACT_APP_TAG_DEV === 'true';
console.log(TagDev);
console.log(process.env);

function App() {
  return (
    <div className="App">
      { TagDev && <TagComponent /> }
      <StrangerThings />
    </div>
  );
}

export default App;