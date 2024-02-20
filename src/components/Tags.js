import './Tags.scss';

const Tags = () => {

    return(   
        
        <section class="accelerateurs">
            <div class="accelerateurs_container">
                <button class="bouton btnFiltre" data-categorie="salle de bain">Salle de bain</button>
                <button class="bouton btnFiltre" data-categorie="salle de douche">Salle de douche</button>
                <button class="bouton btnFiltre" data-categorie="cuisine">Cuisine</button>
                <button class="bouton btnFiltre" data-categorie="pmr">Aménagement PMR</button>
                <button class="bouton btnFiltre" data-categorie="mobilier">Mobilier</button>
                <button class="bouton btnFiltre" data-categorie="toilette">Toilette</button>
            </div>
        </section>   
    )
}


export default Tags;
