import './Tags.scss';

const Tags = () => {

    return(   
        
        <section className="accelerateurs">
            <div className="accelerateurs_container">
                <button className="bouton btnFiltre" data-categorie="salle de bain">Salle de bain</button>
                <button className="bouton btnFiltre" data-categorie="salle de douche">Salle de douche</button>
                <button className="bouton btnFiltre" data-categorie="cuisine">Cuisine</button>
                <button className="bouton btnFiltre" data-categorie="pmr">Aménagement PMR</button>
                <button className="bouton btnFiltre" data-categorie="mobilier">Mobilier</button>
                <button className="bouton btnFiltre" data-categorie="toilette">Toilette</button>
            </div>
        </section>   
    )
}


export default Tags;
