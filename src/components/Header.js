import React, { useEffect } from 'react';
import { add100Vh } from '../functions/add100vh';
import Pastille from "../img/pastilles/pastille-fond-noir.svg";
import './Header.scss';

const Header = () => {

    useEffect(() => {
        add100Vh();
    }, []);

    return (
        <header className="header heightJs" id="header">
            <div className="header_txt">
                <div className="header_txt-container">
                    <div className="header_txt-container--title">
                        <h1>Plomberie <br/> 
                            <span>Joan Bret</span>
                        </h1>
                    </div>
                    <div className="header_txt-container--subtitle">
                        <p>Dépannage, rénovation & création <br/> Rouen et périphérie</p>
                    </div>
                    <a href="#contact" className="bouton bouton_noir">Nous contacter</a>
                </div>       
            </div>

            <div className="header_img"></div>

            <figure className="header_pastille">
                <img src={Pastille} alt="Pastille Plomberie Joan Bret"/>
            </figure>  
        </header>
    ) 
}

export default Header;

