import './Menu.scss';


const Menu = ({ isActive }) => {

    return (
        <section className={`menu ${isActive ? 'active' : ''}`}>
            <div className="menu_container">
                <a href="#entreprise" className="menu_container-link">L'entreprise</a>
                <hr/>
                <a href="#prestations" className="menu_container-link">Prestations</a>
                <hr/>
                <a href="/realisations.html" className="menu_container-link">Réalisations</a>
                <hr/>
                <a href="#contact" className="menu_container-link">Contact</a>
            </div>
        </section>
    )
    
}


export default Menu