import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';

const OpenMenu = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const btnMenu = document.querySelector('.nav_menu');
        
        if (menuOpen) {
            btnMenu.classList.add('active');
        } 
        else {
            btnMenu.classList.remove('active');
        }

        const toggleMenu = () => setMenuOpen(prevState => !prevState);
        btnMenu.addEventListener('click', toggleMenu);

        return () => {
            btnMenu.removeEventListener('click', toggleMenu);
        };
    }, [menuOpen]);

    const closeMenuOnLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <section className={`menu heightJs ${menuOpen ? 'active' : ''}`}>
            <div className="menu_container">
                <a href="#entreprise" className="menu_container-link" onClick={closeMenuOnLinkClick}>L'entreprise</a>
                <a href="#prestations" className="menu_container-link" onClick={closeMenuOnLinkClick}>Prestations</a>
                <a href="/realisations" className="menu_container-link" onClick={closeMenuOnLinkClick}>Réalisations</a>
                <Link to="tel:0235607629" className="bouton bouton_beige">02 35 60 76 29</Link>
            </div>
        </section>
    );
};

export default OpenMenu;