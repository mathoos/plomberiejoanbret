import Logo from "../img/logos/logo-plomberie-noir.svg";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../utilities/Slice";
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = ({ isUserPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            dispatch(clearToken());
            localStorage.removeItem('token');
            navigate("/login");
        } 
        catch (error) {
            console.error("Une erreur s'est produite lors de la déconnexion :", error);
        }
    };


    return(   
              
        <nav className={`nav ${isUserPage ? "user-page" : ""}`}>
            <Link to="/" className="nav_logo">
                <img src={Logo} alt="Logo Plomberie Joan Bret"/>
            </Link>

            <div className="nav_links">
                {isUserPage ? (
                    <button className="nav_links-link" onClick={handleLogout}>Déconnexion</button>
                ) : (
                    <>
                        <a href="#entreprise" className="nav_links-link">L'entreprise</a>
                        <a href="#prestations" className="nav_links-link">Prestations</a>
                        <Link to="/realisations" className="nav_links-link">Réalisations</Link>
                        <Link to="tel:0235607629" className="bouton bouton_noir">02 35 60 76 29</Link>
                    </>
                )}
            </div>
            <button className="nav_menu">
                <div className="nav_menu-barre"></div>
                <div className="nav_menu-barre"></div>
                <div className="nav_menu-barre"></div>
            </button>
        </nav>     
    )
}


export default Navbar