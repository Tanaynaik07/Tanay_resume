import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Close the menu after navigating
        }
    };

    return (
        <nav className="navbar slide-in-bottom">
            <div className="logo">Tanay's Portfolio</div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><a onClick={() => handleScroll('hero')}>Home</a></li>
                <li><a onClick={() => handleScroll('skills')}>Skills</a></li>
                <li><a onClick={() => handleScroll('projects')}>Projects</a></li>
                <li><a onClick={() => handleScroll('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
