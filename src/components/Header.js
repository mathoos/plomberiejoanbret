import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Parallax } from "react-scroll-parallax";
import { add100Vh } from '../functions/add100vh';

import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import './Header.scss';


const Header = ({ 
    showHeaderTxt=true,
    img,
    imgMobile,
    title,
    span,
    txt,
    txtMobile,
    children
    }) => {

        const location = useLocation();
        const contactLink = location.pathname === "/" ? "#contact" : "/#contact";

        useEffect(() => {
            add100Vh();
        }, []);

    return (
        <header className="header heightJs" id="header">
            <Navbar/>
            <Menu />

            {children}
            {showHeaderTxt && (
                <div className="header_txt">
                    <div className="header_txt-title">           
                        <h1>
                            {title} <br/> <span>{span}</span>
                        </h1>
                        <p className="subtitle hidden-mobile" dangerouslySetInnerHTML={{ __html: txt }} />
                        <p className="subtitle hidden-pc" dangerouslySetInnerHTML={{ __html: txtMobile }} />
                    </div> 
                    <div className="header_txt-button">
                        <a href={contactLink} className="bouton bouton_noir">Nous contacter</a>
                    </div>
                </div>
            )}

            <figure className="header_img">
                <Parallax translateY={['-200px', '200px']}>
                    <img src={img} className="hidden-mobile" alt="Salle de bain"/>
                    <img src={imgMobile} className="hidden-pc" alt="Salle de bain"/>
                </Parallax>
            </figure>
                        
        </header>
    ) 
}

export default Header;