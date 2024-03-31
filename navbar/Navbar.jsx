import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/resume">Resume/CV</Link></li>
                <li><Link to="/blog">Blog/Articles</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio-feedback">Portfolio Feedback</Link></li>
            </ul>
            <div className="theme-toggle">Theme Toggle</div>
        </nav>
    );
}

export default Navbar;
