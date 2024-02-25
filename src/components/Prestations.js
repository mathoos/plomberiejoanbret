import { Parallax } from "react-scroll-parallax";
import LogoVert from "../img/logos/logo-plomberie-vert.svg";
import PictogrammeSalleDeBain from "../img/pictogrammes/salle-de-bain.svg";
import PictogrammeSalleDeDouche from "../img/pictogrammes/salle-de-douche.svg";
import PictogrammeCuisine from "../img/pictogrammes/cuisine.svg";
import PictogrammeAmenagementPMR from "../img/pictogrammes/amenagement-pmr.svg";
import PictogrammeDepannage from "../img/pictogrammes/depannage.svg";
import PictogrammeTraitementEau from "../img/pictogrammes/traitement-eau.svg";
import './Prestations.scss';


const Prestations = () => {

    return (
        <section className="prestations" id="prestations">
        <figure className="prestations_forme">
            <Parallax translateY={['50px', '-50px']} easing="ease">
                <img src={LogoVert} alt="Logo Plomberie Joan Bret"/>
            </Parallax>
        </figure>
        <h2>Nos domaine <br/>
            <span>d'intervention</span>
        </h2>
      
        <div className="prestations_container">
            <div className="bloc">
                <div className="bloc_icon">
                    <img src={PictogrammeSalleDeBain} alt="Pictogramme Salle de Bain"/>
                </div>
                <h3>Salle de bain</h3>
                <p>Pour transformer votre salle de bain en un espace de détente grâce à notre expertise en conception et rénovation.</p>
            </div>
        
            <div className="bloc">
                <div className="bloc_icon">
                    <img src={PictogrammeSalleDeDouche} alt="Pictogramme Salle de Douche"/>
                </div>
                <h3>Salle de douche</h3>
                <p>Découvrez des douches élégantes et fonctionnelles, conçues sur mesure pour s'adapter à votre style de vie.</p>
            </div>
        
            <div className="bloc" >
                <div className="bloc_icon">
                    <img src={PictogrammeCuisine} alt="Pictogramme Cuisine"/>
                </div>
                <h3>Cuisine</h3>
                <p>Faites de votre cuisine le cœur de votre maison avec nos services de plomberie adaptés à vos besoins.</p>
            </div>
        
            <div className="bloc">
                <div className="bloc_icon">
                    <img src={PictogrammeAmenagementPMR} alt="Pictogramme Aménagement PMR"/>
                </div>
                <h3>Aménagement PMR</h3>
                <p>Nous créons des espaces accessibles à tous, garantissant confort et autonomie.</p>
            </div>
    
            <div className="bloc">
                <div className="bloc_icon">
                    <img src={PictogrammeDepannage} alt="Pictogramme Dépannage"/>
                </div>
                <h3>Dépannage</h3>
                <p>En cas d'urgence, notre équipe intervient rapidement pour résoudre vos problèmes de plomberie.</p>
            </div>
        
            <div className="bloc">
                <div className="bloc_icon">
                    <img src={PictogrammeTraitementEau} alt="Pictogramme Traitement de l'eau"/>
                </div>
                <h3>Traitement de l'eau</h3>
                <p>Assurez-vous de la qualité de votre eau grâce à nos solutions de traitement de l'eau sur mesure.</p>
            </div>
            
        </div>
    </section>
    ) 
}


export default Prestations;