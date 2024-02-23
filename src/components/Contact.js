import {Link} from "react-router-dom";

import './Contact.scss';
import SalleDeDouche from "../img/galerie/salle-de-douche-moderne.jpg";
import PastilleTxt from "../img/pastilles/pastille-noire-txt.svg";
import PastilleImage from "../img/pastilles/pastille-noire-img.svg";


const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className="contact_container">
                <h2 className="hidden-pc">Où nous <br/> trouver ?</h2>
                <figure className="contact_container-img">
                    <figure className="contact_container-img--img">
                        <img src={SalleDeDouche} alt="Salle de douche"/>
                    </figure>
                    <figure className="contact_container-img--pastille">
                        <img src={PastilleTxt} alt="Pastille Plomberie Joan Bret"/>
                        <img src={PastilleImage} className="img" alt="Pastille Plomberie Joan Bret"/>
                    </figure>
                </figure>
                <div className="contact_container-bloc">
                    <h2 className="hidden-mobile">Où nous <br/> trouver ?</h2>
                    <div className="contact_container-bloc--txt">
                        <p className="subtitle" >Une question, une demande de devis, une urgence ? Contactez-nous.</p>
                        <p>
                            Notre équipe de plombiers intervient pour résoudre tous vos problèmes de plomberie, 
                            ou pour accompagner votre projet de rénovation ou conception de salle de bain, salle de douche ou cuisine.<br/><br/>
                            <Link to="tel:0235607629">02 35 60 76 29</Link><br/>
                            <Link to="mailto:bret.joan@wanadoo.fr">bret.joan@wanadoo.fr</Link>
                        </p>     
                    </div>
                    <Link className="bouton bouton_noir" 
                        to="https://www.google.com/search?q=plomberie+joan+bret&rlz=1C1CHBF_frFR1030FR1030&oq=plomberie+joan+bret&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDIwMDhqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x47e0dd0a7dbf5b85:0xbff17fa33eb19c86,3,,,," 
                        target="_blank" rel="noreferrer">
                        Laisser un avis
                    </Link>          
                </div>
            </div>  
        </section>
    ) 
}


export default Contact;