import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Locations from './Components/Locations';
import Events from './Components/Events';
import ToDo from './Components/ToDo';
import HomePage from './Components/HomePage';
import LocationShow from './Components/Locations/LocationShow';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-content">
            <Route exact path="/locations/:id" component={LocationShow} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/about" component={ToDo} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
