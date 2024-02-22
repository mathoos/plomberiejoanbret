import React, { useEffect } from 'react';
import { add100Vh } from '../functions/add100vh';
import PastilleTxt from "../img/pastilles/pastille-noire_txt.svg";
import PastilleImg from "../img/pastilles/pastille-noire_img.svg";
import HeaderImg from "../img/galerie/darren-richardson-1zKFtv-TmWM-unsplash.jpg";
import './Header.scss';

const Header = ({ 
    showHeaderTxt=true,
    children
    }) => {

    useEffect(() => {
        add100Vh();
    }, []);

    return (
        <header className="header heightJs" id="header">
            {children}
            {showHeaderTxt && (
                <div className="header_txt">
                    <div className="header_txt-container">
                        <div className="header_txt-container--title">
                            <h1>Plomberie <br/> 
                                <span>Joan Bret</span>
                            </h1>
                        </div>
                        <div className="header_txt-container--subtitle">
                            <p>
                                Artisan plombier agréé Jacob Delafon <br/>
                                Dépannage, création & rénovation <br/> 
                                Rouen et périphérie
                            </p>
                        </div>
                    </div> 
                    <figure className="header_txt-pastille">
                        <img src={PastilleTxt} className="txt" alt="Pastille Plomberie Joan Bret"/>
                        <img src={PastilleImg} className="img" alt="Pastille Plomberie Joan Bret"/>
                    </figure>       
                </div>
            )}
            <figure className="header_img">
                <img src={HeaderImg} alt="Paroie de douche"/>
            </figure>
        </header>
    ) 
}

export default Header;

