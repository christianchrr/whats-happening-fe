import React from 'react'
import './Navbar.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/"><h1>Whats Happening</h1></NavLink>
            <div className="links">
                <NavLink to="/locations">Locations</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/about">To Do</NavLink>
            </div>
        </div>
    )

}

export default Navbar