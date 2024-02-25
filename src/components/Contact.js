import {Link} from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { bottomAnimation , scaleAnimation} from "../functions/keyframes";
import './Contact.scss';
import SalleDeDouche from "../img/galerie/salle-de-douche-moderne.jpg";
import PastilleTxt from "../img/pastilles/pastille-noire-txt.svg";
import PastilleImage from "../img/pastilles/pastille-noire-img.svg";


const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className="contact_container">
                <Reveal keyframes={bottomAnimation} triggerOnce="true" className="hidden-pc">
                    <h2>Où nous <br/> trouver ?</h2>
                </Reveal>
                <figure className="contact_container-img">
                    <figure className="contact_container-img--img">
                        <Reveal keyframes={scaleAnimation} className="reveal">
                            <img src={SalleDeDouche} alt="Salle de douche"/>
                        </Reveal>
                    </figure>
                    <figure className="contact_container-img--pastille">
                        <Parallax rotate={[0, 180]} speed="-1000" easing="linear">
                            <img src={PastilleTxt} alt="Pastille Plomberie Joan Bret"/>
                        </Parallax>
                        <img src={PastilleImage} className="img" alt="Pastille Plomberie Joan Bret"/>
                    </figure>
                </figure>
                <div className="contact_container-bloc">
                    <Reveal keyframes={bottomAnimation} triggerOnce="true">
                        <h2 className="hidden-mobile">Où nous <br/> trouver ?</h2>
                    </Reveal>
                    
                    <div className="contact_container-bloc--txt">
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p className="subtitle" >Une question, une demande de devis, une urgence ? Contactez-nous.</p>
                        </Reveal>
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p>
                                Notre équipe de plombiers intervient pour résoudre tous vos problèmes de plomberie, 
                                ou pour accompagner votre projet de rénovation ou conception de salle de bain, salle de douche ou cuisine.<br/><br/>
                                <Link to="tel:0235607629">02 35 60 76 29</Link><br/>
                                <Link to="mailto:bret.joan@wanadoo.fr">bret.joan@wanadoo.fr</Link>
                            </p> 
                        </Reveal>    
                    </div>
                    <Reveal keyframes={bottomAnimation} triggerOnce="true">
                        <Link className="bouton bouton_noir" 
                            to="https://www.google.com/search?q=plomberie+joan+bret&rlz=1C1CHBF_frFR1030FR1030&oq=plomberie+joan+bret&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDIwMDhqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x47e0dd0a7dbf5b85:0xbff17fa33eb19c86,3,,,," 
                            target="_blank" rel="noreferrer">
                            Laisser un avis
                        </Link>  
                    </Reveal>        
                </div>
            </div>  
        </section>
    ) 
}


export default Contact;