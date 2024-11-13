import React from 'react';
import Logo from "../img/logos/logo-plomberie-circle-beige.svg";
import { Link, useLocation } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {

    const location = useLocation();
    const entrepriseLink = location.pathname === "/" ? "#entreprise" : "/#entreprise";
    const prestationsLink = location.pathname === "/" ? "#prestations" : "/#prestations";


    return(   
              
        <nav className="nav">
            <Link to="/" className="nav_logo">
                <img src={Logo} alt="Logo Plomberie Joan Bret"/>
            </Link>

            <div className="nav_links">
                <a href={entrepriseLink} className="nav_links-link">L'entreprise</a>
                <a href={prestationsLink} className="nav_links-link">Prestations</a>
                <a href="/realisations" className="nav_links-link">Réalisations</a>
                <Link to="tel:0235607629" className="bouton bouton_beige">02 35 60 76 29</Link>
            </div>
            
            <button className="nav_menu">
                <div className="nav_menu-barre"></div>
                <div className="nav_menu-barre"></div>
                <div className="nav_menu-barre"></div>
            </button>
        </nav>     
    )
}


export default Navbar