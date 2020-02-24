import React from 'react';
import Quotes from './components/Quotes'
import './App.css';
import head from './images/kayne_head.png'


function App() {
  return (     
    
      <div className="App">
      <image src={head} alt='the crown'/>
          <Quotes/>
      </div>    
  );
}

export default App;
