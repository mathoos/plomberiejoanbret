import Header from '../components/Header';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/cuisine(3).jpg";


function Home() {
    return (
        <div>
            <Header 
                img={HeaderImg} 
                title="Plomberie" 
                span="creations" 
                txt=
                    {`
                        Des projets réalisés sur-mesure <br/>
                        Découvrez notre savoir-faire <br/> 
                        à travers nos réalisations
                    `} 
            />
            <Galerie/>
            <Footer/>
        </div>
    )
}


export default Home;