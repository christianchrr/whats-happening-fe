import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Locations from './Components/Locations';
import Events from './Components/Events';
import ToDo from './Components/ToDo';
import HomePage from './Components/HomePage';
import LocationShow from './Components/Locations/LocationShow';
import UserLogin from './Components/Users/UserLogin';
import UserForm from './Components/Users/UserForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
            <Route exact path="/locations/:id" component={LocationShow} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/create-user" component={UserForm} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
