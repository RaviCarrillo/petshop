import React from 'react';
import './App.css';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import NotFound from './paginas/notfound';
import './assets/css/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
   
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route component={NotFound} />
      </Switch>
    </Router> 

  );
} 



/* function App() {
  const Router = () => {
    const location = window.location.pathname;
    if(location === '/sobre'){
      return <Sobre />;
    } else {
      return <Home />;
    }
  }
  return (
    <div className="App">
      <Router />
    </div>
  );
} */


/* function App() {
  return (
    <div className="App">
      <div>
        <Home />
        <Sobre />
      </div>
    </div>
  );
} */

export default App;
