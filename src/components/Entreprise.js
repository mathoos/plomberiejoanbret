import SalleDeBain from "../img/galerie/baignoire-vert.jpg";
import PastilleTxt from "../img/pastilles/pastille-verte-txt.svg";
import PastilleImg from "../img/pastilles/pastille-verte-img.svg";
import { Parallax } from "react-scroll-parallax";
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
                <figure className="entreprise_img-pastille">
                    <Parallax rotate={[0, 180]} speed="-1000" easing="linear">
                        <img src={PastilleTxt} alt="Pastille Entreprise Plomberie Joan Bret"/>
                    </Parallax>
                    <img src={PastilleImg} alt="Pastille Entreprise Plomberie Joan Bret" className="img"/>
                </figure>
            </div>
            <div className="entreprise_bloc">
                <div className="entreprise_bloc-container">
                    <Reveal keyframes={bottomAnimation} className="entreprise_bloc-container--title">
                        <h2>L'entreprise</h2>
                    </Reveal>
                    <div className="entreprise_bloc-container--txt">
                        <Reveal keyframes={bottomAnimation}>
                            <p className="subtitle">
                                Votre partenaire plomberie, alliant passion de l'artisanat et excellence du service.
                            </p> 
                        </Reveal>
                        <Reveal keyframes={bottomAnimation}>
                            <p>
                                Formé au métier de plombier dès l'âge de 16 ans, c'est en janvier 1994 que je décide 
                                de devenir indépendant et de créer ma propre entreprise de plomberie.<br/><br/>

                                En maintenant 32 ans d'existence, l'entreprise a bien évolué; de simples dépannages sanitaires, 
                                je m'épanouis à présent dans la création de salle de bain, de salle de douche et de cuisine.<br/><br/>
                                
                                Si l'artisanat me passionne, c'est surtout la satisfaction de mes clients qui m'apporte fierté 
                                et permet à l'entreprise de se dépasser toujours plus.
                            </p>
                        </Reveal> 
                    </div>
                    <Reveal keyframes={bottomAnimation}>
                        <a href="#prestations" className="bouton bouton_blanc">Nos prestations</a>
                    </Reveal>
                </div>      
            </div>
        </section>
    ) 
}


export default Entreprise;