import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Resume from '../components/Resume';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/salle-de-bain-moderne-noire.jpg";


function Realisations() {
    return (
        <div>
            <Helmet>
                <title>Plomberie Joan Bret | Nos réalisations</title>
                <meta name="description" content="Découvrez notre savoir-faire à travers nos réalisations de plomberie : salle de bain, salle de douche, salle d'eau, cuisine." />
                <meta name="keywords" content="plombier, plomberie, dépannage, salle de bain, salle de douche, cuisine, Rouen" />
            </Helmet>
            <Header 
                img={HeaderImg} 
                imgMobile={HeaderImg}
                title="Plomberie" 
                span="creations" 
                txt=
                    {`
                        Des projets réalisés sur-mesure <br/>
                        Découvrez notre savoir-faire <br/> 
                        à travers nos réalisations
                    `} 
                txtMobile=
                {`
                    Découvrez notre savoir-faire en plomberie
                    à travers nos réalisations sur-mesure
                `} 
            />
            <Resume
                txt=
                {
                    <>
                        Découvrez en images notre savoir-faire en plomberie. <br/>
                        Chaque projet reflète notre engagement à fournir un travail de qualité pour répondre à vos besoins 
                        et à vos attentes.
                    </>
                } 
            />
            <Galerie/>
            <Footer/>
        </div>
    )
}


export default Realisations;