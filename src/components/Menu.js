import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const OpenMenu = () => {
    const currentPath = window.location.pathname;

    let linkText, linkTo;

    if (currentPath === '/') {
        linkText = 'Réalisations';
        linkTo = '/realisations';
    } 

    else {
        linkText = 'Accueil';
        linkTo = '/';
    }

    return (
        <section className="menu">
            <div className="menu_container">
                <Link to={linkTo} className="menu_container-link">{linkText}</Link>
            </div>
        </section>
    );
};

export default OpenMenu;