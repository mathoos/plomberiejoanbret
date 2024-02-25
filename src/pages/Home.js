import Header from '../components/Header';
import Tags from '../components/Tags';
import Entreprise from '../components/Entreprise';
import Prestations from '../components/Prestations';
import Realisations from '../components/Realisations';
import Contact from '../components/Contact';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/paroie-salle-de-douche.jpg";


function Home() {

    return (
        <div>           
            <Header img={HeaderImg}/>
            <Tags/>
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