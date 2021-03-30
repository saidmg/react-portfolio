import React from "react";
import { NavLink } from "react-router-dom"
import "./style.css";

function NavBar() {

    return (
        
        <div class='navLeft'>
        <NavLink to="/home" className="nav-link" activeClassName="active" >
            <h1  class="navH1" >Home</h1></NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active" > 
        <h1 class="navH1">About</h1></NavLink>
        <NavLink to="/projects" className="nav-link" activeClassName="active" > 
        <h1  class="navH1">Projects</h1></NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active" > 
        <h1 class="navH1">Contact</h1></NavLink>
        </div>
    )
}

export default NavBar;
