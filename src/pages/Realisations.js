import Header from '../components/Header';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';
import HeaderImg from "../img/galerie/evier-eau.jpg";


function Home() {
    return (
        <div>
            <Header img={HeaderImg}/>
            <Galerie/>
            <Footer/>
        </div>
    )
}


export default Home;