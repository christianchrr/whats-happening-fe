import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Locations from './Components/Locations';
import Events from './Components/Events';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className="App">
      <h1>Whats Happening</h1>
      <br/>
      <Router>
        <NavBar />
        <Route path="/locations" component={Locations} />
        <Route path="/events" component={Events} />
        <Route path="/about" component={ToDo} />
      </Router>
    </div>
  );
}

export default App;
