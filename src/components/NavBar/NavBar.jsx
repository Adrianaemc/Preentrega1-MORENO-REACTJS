import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="NavBar">
            <div className="navbar-container">
                <h1>
                    <Link to="/" className="navbar-logo">ARCLOTHING</Link>
                </h1>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/category/women" className="navbar-link">Ropa de Mujer</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/category/men" className="navbar-link">Ropa de Hombre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
