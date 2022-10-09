import React, { useEffect, useState } from "react";

import { NavLink } from 'react-router-dom';
import NavLogo from '../../assets/nav-logo.png';
import Button from "./Button";

const Navbar = ({showLinks, logout}) => {
    const [showMobileNav, setMobileNav] = useState(false);

    const toggleDarkMode = (e) => {
        e.target.classList.toggle('active');
        document.querySelector('.nav-logo').classList.toggle('white');
        document.getElementById('root').classList.toggle('dark-mode');
    }
    useEffect(() => {
        document.querySelector('.toggle-btn-wrapper .dark-mode-btn').addEventListener('click', toggleDarkMode);
    },[])

    return(
        <nav id="navbar">
            <div className="container">
                <div className="nav-logo">
                    <img src={NavLogo} alt="Navbar Logo" />
                </div>
                <div className={`nav-menu ${showMobileNav ? "active" : ""}`}>
                    {showLinks ? 
                    <div className="nav-links">
                        <NavLink exact to="/" end>Home</NavLink>
                        <NavLink exact to="/create">Add Todo</NavLink>
                        <NavLink exact to="/calendar">Calendar</NavLink>
                        <Button type={'primary-btn'} className={'logout-btn'} text={'Logout'} clickFunc={logout}/>
                    </div>
                    :
                    ""}
                    <div className="toggle-btn-wrapper">
                        <p>Theme</p>
                        <div className="dark-mode-btn"></div>
                    </div>
                </div>
                <div id="hamburger-btn" className={showMobileNav ? "active" : ""} onClick={() => setMobileNav(!showMobileNav)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;