import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Resume from '../components/Resume';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/salle-de-bain-moderne-noire.jpg";
import HeaderImgMobile from "../img/galerie/header-realisations-mobile.jpg";


function Realisations() {

    const location = useLocation();

    useEffect(() => {

        // Envoi d'un événement de page vue à Google Analytics
        window.gtag('event', 'page_view', {
            page_path: location.pathname + location.search, 
            page_title: 'Plomberie Joan Bret - Réalisations' 
        });

    }, [location]);

    return (
        <div>
            <Helmet>
                <title>Plomberie Joan Bret | Nos réalisations</title>
                <meta name="description" content="Découvrez notre savoir-faire à travers nos réalisations de plomberie : salle de bain, salle de douche, salle d'eau, cuisine." />
                <meta name="keywords" content="plombier, plomberie, dépannage, salle de bain, salle de douche, cuisine, Rouen" />
            </Helmet>
            <Header 
                img={HeaderImg} 
                imgMobile={HeaderImgMobile}
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