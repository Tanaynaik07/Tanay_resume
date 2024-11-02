// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar  slide-in-bottom">
            <div className="logo">Tanay's Portfolio</div>
            <ul className="nav-links">
                <li><a onClick={() => handleScroll('hero')}>Home</a></li>
                <li><a onClick={() => handleScroll('skills')}>Skills</a></li>
                <li><a onClick={() => handleScroll('projects')}>Projects</a></li>
                 
                <li><a onClick={() => handleScroll('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
