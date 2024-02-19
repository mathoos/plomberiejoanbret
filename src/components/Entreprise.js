import SalleDeBain from "../img/galerie/modern-bathroom-authentic-interior-design.jpg";
import PastilleTxt from "../img/pastilles/pastille-verte-txt.svg";
import PastilleImg from "../img/pastilles/pastille-verte-img.svg";

import './Entreprise.scss';


const Entreprise = () => {

    return (
        <section className="entreprise" id="entreprise">
            <figure className="entreprise_img">
                <figure className="entreprise_img-img">
                    <img src={SalleDeBain} alt="Salle de bain"/>
                </figure>
                <figure className="entreprise_img-pastille">
                    <img src={PastilleTxt} alt="Pastille Entreprise Plomberie Joan Bret"/>
                    <img src={PastilleImg} alt="Pastille Entreprise Plomberie Joan Bret" className="img"/>
                </figure>
            </figure>
            <div className="entreprise_bloc">
                <div className="entreprise_bloc-container">
                    <div className="entreprise_bloc-container--title">
                        <h2>L'entreprise</h2>
                    </div>
                    <div className="entreprise_bloc-container--txt">
                        <p className="subtitle">
                            Votre partenaire plomberie, alliant passion de l'artisanat et excellence du service.
                        </p>   
                        <p>
                            Formé au métier de plombier dès l'âge de 16 ans, c'est en janvier 1994 que je décide 
                            de devenir indépendant et de créer ma propre entreprise de plomberie.<br/><br/>

                            En maintenant 32 ans d'existence, l'entreprise a bien évolué; de simples dépannages sanitaires, 
                            je m'épanouis à présent dans la création de salle de bain, de salle de douche et de cuisine.<br/><br/>
                            
                            Si l'artisanat me passionne, c'est surtout la satisfaction de mes clients qui m'apporte fierté 
                            et permet à l'entreprise de se dépasser toujours plus.
                        </p>
                    </div>
                    <a href="#prestations" className="bouton bouton_vert">Nos prestations</a>
                </div>      
            </div>
        </section>
    ) 
}


export default Entreprise;