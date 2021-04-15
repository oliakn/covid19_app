import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import World from "./pages/World";
import Countries from "./pages/Countries";
import Country from "./pages/Country";


const App = () => {
  return (
      <Router>
        <Route exact path='/' component={World} />
        <Route exact path='/info' component={Countries }/>
        <Route exact path='/country/:name' component={Country} />
      </Router>
  );
};

export default App;
