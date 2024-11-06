import SalleDeBain from "../img/galerie/baignoire-vert.jpg";
import { Reveal } from "react-awesome-reveal";
import {scaleAnimation , bottomAnimation} from "../functions/keyframes";
import './Entreprise.scss';


const Entreprise = () => {

    return (
        <section className="entreprise" id="entreprise">
            <div className="entreprise_img">
                <figure className="entreprise_img-img">
                    <Reveal keyframes={scaleAnimation} className="reveal">
                        <img src={SalleDeBain} alt="Salle de bain"/>
                    </Reveal>             
                </figure>
            </div>
            <div className="entreprise_bloc">
                <div className="entreprise_bloc-container">
                    <Reveal keyframes={bottomAnimation} triggerOnce="true" className="entreprise_bloc-container--title">
                        <h2>Expérience d'un plombier</h2>
                    </Reveal>
                    <div className="entreprise_bloc-container--txt">
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p className="subtitle">
                                Votre partenaire plomberie, alliant passion et savoir-faire artisanal, sur Rouen et sa périphérie.
                            </p> 
                        </Reveal>
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p>
                                Formé au métier de plombier dès l'âge de 16 ans, c'est en janvier 1994 que je décide 
                                de devenir indépendant et de créer ma propre entreprise de plomberie sur Rouen.<br/><br/>

                                En maintenant 32 ans d'existence, l'entreprise a bien évolué. De simples dépannages sanitaires, 
                                je m'épanouis à présent dans la création de salle de bain, de salle de douche et de cuisine.<br/><br/>
                                
                                Si le métier de plombier me passionne, c'est surtout la satisfaction de mes clients qui m'apporte fierté 
                                et permet à l'entreprise de se dépasser toujours plus.
                            </p>
                        </Reveal> 
                    </div>
                    <Reveal keyframes={bottomAnimation} triggerOnce="true">
                        <a href="#prestations" className="bouton bouton_blanc">Nos prestations</a>
                    </Reveal>
                </div>      
            </div>
        </section>
    ) 
}


export default Entreprise;