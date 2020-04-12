import React from 'react';
import Quotes from './components/Quotes'
import './App.css';
// import head from './images/kayne_head.png'


function App() {
  return (     
    
      <div className="App">
        <span id='Kanye' classname="Kanye">
          <img src={require( './images/kayne_head.png')} alt='the crown'/>
        </span>
          <Quotes/>
      </div>    
  );
}

export default App;
