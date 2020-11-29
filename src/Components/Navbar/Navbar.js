import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/locations">Link</NavLink>
        </div>
    )

}

export default NavBar