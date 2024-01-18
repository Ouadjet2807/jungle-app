import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav>
                <span>Jungle</span>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
                    <NavLink to="/plantes" className={(nav) => (nav.isActive ? "nav-active" : "")}>Plantes</NavLink>
                    <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active" : "")}>Favoris</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;