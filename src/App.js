import React from 'react';
import './App.css';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import './assets/css/base.css';


function App() {
  return (
    <div className="App">
      <div>
        <Home />
        <Sobre />
      </div>
    </div>
  );
}

export default App;
