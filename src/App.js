import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Locations from './Components/Locations';
import Events from './Components/Events';
import ToDo from './Components/ToDo';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/about" component={ToDo} />
      </Router>
    </div>
  );
}

export default App;
