import './Marquee.scss';


const Marquee = ({className}) => {

    return (
        <section className={`marquee ${className || ""}`}>
            <div className="marquee_container">
                <p>Dépannage . <span>Rénovation</span> . Création . <span>Dépannage</span> . Rénovation . <span>Création .</span>&nbsp;</p>
                <p>Dépannage . <span>Rénovation</span> . Création . <span>Dépannage</span> . Rénovation . <span>Création .</span>&nbsp;</p>
            </div>
        </section>
    ) 
}


export default Marquee;