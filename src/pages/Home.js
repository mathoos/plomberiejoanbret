import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Tags from '../components/Tags';
import Entreprise from '../components/Entreprise';
import Prestations from '../components/Prestations';
import Realisations from '../components/Realisations';
import Contact from '../components/Contact';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';




function Home() {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })


    return (
        <ReactLenis root>
            
            <Header/>
            {/* <Navbar/>
            <Menu/> */}
            <Tags/>
            <Entreprise/>
            <Marquee/>
            <Prestations/>
            <Realisations/>
            <Marquee/>
            <Contact/>
            <Footer/>
        </ReactLenis>
    )
}


export default Home;