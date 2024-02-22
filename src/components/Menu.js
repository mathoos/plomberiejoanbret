import { Link } from "react-router-dom";
import "./Menu.scss";

const openMenu = () => {

    return (
        <section className="menu">
            <div className="menu_container">
                <a href="#entreprise" className="menu_container-link">L'entreprise</a>
                <hr/>
                <a href="#prestations" className="menu_container-link">Prestations</a>
                <hr/>
                <Link to="/realisations" className="menu_container-link">Réalisations</Link>
                <hr/>
                <a href="#contact" className="menu_container-link">Contact</a>
            </div>
        </section>
    )
}

export default openMenu;