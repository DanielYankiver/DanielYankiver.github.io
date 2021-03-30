import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/software-engineer">Software Engineer</NavLink>
            <NavLink exact to="/filmmaker">Filmmaker</NavLink>
            <NavLink exact to="/bio-contact">Bio & Contact</NavLink>
            <NavLink exact to="/resume">Resume</NavLink>
            <NavLink exact to="/blogs">Blogs</NavLink>
        </nav>
    );
}

export default NavBar;