import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    return (
        <nav className="nav-btns">
            <NavLink className="nav-btn" exact to="/">HOME</NavLink>
            <NavLink className="nav-btn" exact to="/software-engineer">SOFTWARE ENGINEER</NavLink>
            <NavLink className="nav-btn" exact to="/filmmaker">FILMMAKER</NavLink>
            <NavLink className="nav-btn" exact to="/bio-contact">BIO & CONTACT</NavLink>
            <NavLink className="nav-btn" exact to="/resume">RESUME</NavLink>
            <NavLink className="nav-btn" exact to="/blogs">BLOGS</NavLink>
        </nav>
    );
}

export default NavBar;