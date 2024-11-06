import Header from '../components/Header';
import Entreprise from '../components/Entreprise';
import Prestations from '../components/Prestations';
import Realisations from '../components/Realisations';
import Contact from '../components/Contact';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/salle-de-bain(10).jpg";


function Home() {

    return (
        <div>           
            <Header 
                img={HeaderImg} 
                title="Plomberie" 
                span="Joan Bret" 
                txt=
                    {`
                        Artisan plombier agréé Jacob Delafon <br/>
                        Dépannage, création & rénovation <br/> 
                        Rouen et périphérie
                    `} 
            />
            <Entreprise/>
            <Marquee/>
            <Prestations/>
            <Realisations/>
            <Marquee/>
            <Contact/>
            <Footer/>
        </div>
    )
}


export default Home;