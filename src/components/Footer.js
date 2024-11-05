import Pastille from "../img/pastilles/pastille-blanc.svg";
import './Footer.scss';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_container-bloc">
                    <h4>Adresse</h4>
                    <p>
                        169 rue de Cérès<br/>
                        76230 Bois-Guillaume
                    </p>
                </div>
                <div className="footer_container-bloc">
                    <h4>Contact</h4>
                    <p>
                        <a href="tel:0235607629">02 35 60 76 29</a><br/>
                        <a href="mailto:bret.joan@wanadoo.fr">bret.joan@wanadoo.fr</a>
                    </p>
                </div>
                <figure className="footer_container-bloc logo">
                    <img src={Pastille} alt="Pastille Plomberie Joan Bret"/>
                </figure>
            </div>
            <div className="footer_copyright">
                <p>Copyright 2024 - Entreprise de Plomberie Joan Bret | Plombier sur Rouen et périphérie - <a href="/">Mentions légales</a> </p>
                <p>Site designé et développé par <a href="https://mathilde-bret.onrender.com/" target="_blank" rel="noreferrer">Mathilde Bret</a></p>
            </div>
        </footer>
    )
}

export default Footer;