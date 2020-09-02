import React, { createRef } from "react";
import Quotes from "./components/Quotes";
import Giphy from "./components/Giphy";
import "./App.css";
// import head from './images/kayne_head.png'

function App() {
  return (
    <div className="App">
      <Quotes />
      <Giphy />
    </div>
  );
}

export default App;
