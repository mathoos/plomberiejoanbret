import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Entreprise from '../components/Entreprise';
import Prestations from '../components/Prestations';
import Realisations from '../components/Realisations';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/header_home.jpg";
import HeaderImgMobile from "../img/galerie/header_home_mobile.jpg";
import SalleDeBain from "../img/galerie/cuisine(6).jpg";
import SalleDeDouche from "../img/galerie/cuisineAmericaine2.jpg";


function Home() {

    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace("#", "");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div>           
            <Header 
                img={HeaderImg} 
                imgMobile={HeaderImgMobile}
                title="Plomberie" 
                span="Joan Bret" 
                txt=
                    {`
                        Artisan plombier agréé Jacob Delafon <br/>
                        Dépannage, création & rénovation <br/> 
                        Rouen et périphérie
                    `} 
            />
            <Entreprise
                id="entreprise"
                img={SalleDeBain} 
                alt="Salle de bain"
                title="Expérience d'un plombier" 
                subtitle="Votre partenaire plomberie, alliant passion et savoir-faire artisanal, sur Rouen et sa périphérie." 
                txt=
                    {`
                        Formé au métier de plombier dès l'âge de 16 ans, c'est en janvier 1994 que je décide 
                        de devenir indépendant et de créer ma propre entreprise de plomberie sur Rouen.<br/><br/>

                        En maintenant 32 ans d'existence, l'entreprise a bien évolué. De simples dépannages sanitaires, 
                        je m'épanouis à présent dans la création de salle de bain, de salle de douche et de cuisine.<br/><br/>
                        
                        Si le métier de plombier me passionne, c'est surtout la satisfaction de mes clients qui m'apporte fierté 
                        et permet à l'entreprise de se dépasser toujours plus.
                    `} 
                a="Nos prestations"
                href="#prestations"
                link={false}
            />
            <Marquee/>
            <Prestations/>
            <Realisations/>
            <Marquee
                className="marron"
            />
            <Entreprise
                className="entreprise-contact"
                id="contact"
                img={SalleDeDouche} 
                alt="Salle de douche"
                title="Où nous trouver ?" 
                subtitle="Une question, une demande de devis, une urgence ? Contactez-nous." 
                txt=
                    {`
                        Notre équipe de plombiers intervient pour résoudre tous vos problèmes de plomberie, 
                        ou pour accompagner votre projet de rénovation ou conception de salle de bain, salle de douche ou cuisine.<br/><br/>
                        <Link to="tel:0235607629">02 35 60 76 29</Link><br/>
                        <Link to="mailto:bret.joan@wanadoo.fr">bret.joan@wanadoo.fr</Link>
                    `} 
                a={false}
                link ="Laisser un avis"
                href="https://www.google.com/search?q=plomberie+joan+bret&rlz=1C1CHBF_frFR1030FR1030&oq=plomberie+joan+bret&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDIwMDhqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x47e0dd0a7dbf5b85:0xbff17fa33eb19c86,3,,,,"
            />
            <Footer/>
        </div>
    )
}


export default Home;