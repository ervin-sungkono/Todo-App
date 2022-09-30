import React from "react";
import { useEffect } from "react";

import { NavLink } from 'react-router-dom';
import NavLogo from '../../assets/nav-logo.png'
import Button from "./Button";

const Navbar = ({showLinks, logout}) => {

    const toggleDarkMode = (e) => {
        e.target.classList.add('active');
    }
    useEffect(() => {
        document.querySelector('.toggle-btn.dark-mode-btn').addEventListener('click', toggleDarkMode);
    },[])

    return(
        <nav id="navbar">
            <div className="container">
                <div className="nav-logo">
                    <img src={NavLogo} alt="Navbar Logo" />
                </div>
                <div className="nav-menu">
                    {showLinks ? 
                    <div className="nav-links">
                        <NavLink exact to="/" end>Home</NavLink>
                        <NavLink exact to="/create">Add Todo</NavLink>
                        <NavLink exact to="/calendar">Calendar</NavLink>
                        <Button type={'primary-btn'} className={'logout-btn'} text={'Logout'} clickFunc={logout}/>
                    </div>
                    :
                    ""}
                    <div className="toggle-btn dark-mode-btn">

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;