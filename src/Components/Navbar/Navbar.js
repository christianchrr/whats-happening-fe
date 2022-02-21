import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="links">
                <NavLink to="/" className="main">Home</NavLink>
                <NavLink to="/locations">Locations</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/about">To Do</NavLink>
            </div>
        </div>
    )

}

export default NavBar