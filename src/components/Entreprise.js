
import { Reveal } from "react-awesome-reveal";
import {Link} from "react-router-dom";
import {scaleAnimation , bottomAnimation} from "../functions/keyframes";
import './Entreprise.scss';


const Entreprise = ({id, img, alt, title, subtitle, txt, a, href, link, className}) => {

    return (
        <section className={`entreprise ${className || ""}`} id={id}>
            <div className="entreprise_img">
                <figure className="entreprise_img-img">
                    <Reveal keyframes={scaleAnimation} className="reveal">
                        <img src={img} alt={alt}/>
                    </Reveal>             
                </figure>
            </div>
            <div className="entreprise_bloc">
                <div className="entreprise_bloc-container">
                    <div className="entreprise_bloc-container--title">
                        <Reveal keyframes={bottomAnimation} triggerOnce="true" >
                            <h2>{title}</h2>
                        </Reveal>
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p className="subtitle">
                                {subtitle}
                            </p> 
                        </Reveal>
                    </div>
                    
                    <div className="entreprise_bloc-container--txt">
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p>{txt}</p>
                        </Reveal> 
                    </div>
                    <Reveal keyframes={bottomAnimation} triggerOnce={true}>
                        {a && (
                            <a href={href} className="bouton bouton_noir">
                                {a}
                            </a>
                        )}
                        {link && (
                            <Link to={href} className="bouton bouton_marron" target="_blank" rel="noreferrer">
                                {link}
                            </Link>
                        )}
                    </Reveal>
                </div>      
            </div>
        </section>
    ) 
}


export default Entreprise;