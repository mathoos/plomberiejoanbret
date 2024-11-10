import Header from '../components/Header';
import Marquee from '../components/Marquee';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/cuisine(3).jpg";


function Realisations() {
    return (
        <div>
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
            />
            <Marquee
                className="marron"
            />
            <Galerie/>
            <Footer
                className="realisations-page"
            />
        </div>
    )
}


export default Realisations;