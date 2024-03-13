import React from 'react';
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
                <a href={linkTo} className="menu_container-link">{linkText}</a>
            </div>
        </section>
    );
};

export default OpenMenu;