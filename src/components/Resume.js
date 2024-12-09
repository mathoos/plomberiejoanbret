import PastilleTxt from "../img/pastilles/pastille-noire-txt.svg";
import PastilleImg from "../img/pastilles/pastille-noire-img.svg";
import './Resume.scss';


const Resume = ({id, txt, className}) => {

    return (
        <section className={`resume ${className || ""}`} id={id}>
            
            <p>{txt}</p>
            <figure className="resume_pastille">
                <img src={PastilleTxt} className="txt" alt="Pastille Plomberie Joan Bret"/>
                <img src={PastilleImg} className="img" alt="Pastille Plomberie Joan Bret"/>
            </figure> 
          
        </section>
    ) 
}


export default Resume;