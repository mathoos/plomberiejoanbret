import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Parallax } from "react-scroll-parallax";
import { add100Vh } from '../functions/add100vh';
import PastilleTxt from "../img/pastilles/pastille-marron-txt.svg";
import PastilleImg from "../img/pastilles/pastille-marron-img.svg";
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
                            {title} <br/> {span}
                        </h1>
                        <p className="subtitle" dangerouslySetInnerHTML={{ __html: txt }} />
                    </div> 
                    <div className="header_txt-button">
                        <a href={contactLink} className="bouton bouton_marron">Nous contacter</a>
                    </div>
                </div>
            )}

            <figure className="header_img">
                <Parallax translateY={['-200px', '200px']}>
                    <img src={img} className="hidden-mobile" alt="Salle de bain"/>
                    <img src={imgMobile} className="hidden-pc" alt="Salle de bain"/>
                </Parallax>
            </figure>
            
            <figure className="header_pastille">
                <img src={PastilleTxt} className="txt" alt="Pastille Plomberie Joan Bret"/>
                <img src={PastilleImg} className="img" alt="Pastille Plomberie Joan Bret"/>
            </figure>  
        </header>
    ) 
}

export default Header;