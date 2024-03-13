import React, { useState, useEffect } from 'react';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation , scaleAnimation } from "../functions/keyframes";
import {Link} from "react-router-dom";
import './Realisations.scss';


const Realisations = () => {

    const [photographies, setPhotographies] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/realisationsPreview.json');
                const data = await res.json();
                setPhotographies(data.photographies);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photographies.length) % photographies.length);
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photographies.length);
    };

    


    return (
        <section className="realisations" id="realisations">
            <div className="realisations_container">
                <div className="realisations_container-txt">
                    <div className="realisations_container-txt--title">
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <h2 dangerouslySetInnerHTML={{__html: photographies[currentImageIndex]?.title}}></h2>    
                        </Reveal> 
                    </div>
                    <div className="realisations_container-txt--subtitle">
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p className="subtitle">
                                {photographies[currentImageIndex]?.subtitle}
                            </p>
                        </Reveal>
                        <Reveal keyframes={bottomAnimation} triggerOnce="true">
                            <p className="description">
                                {photographies[currentImageIndex]?.description}
                            </p>
                        </Reveal>
                    </div>
                    <Reveal keyframes={bottomAnimation} triggerOnce="true">
                        <a href="/realisations" className="bouton bouton_blanc hidden-mobile">Toutes nos réalisations</a>
                    </Reveal>
                </div>
                <div className="realisations_container-slider">
                    <figure className="realisations_container-slider--img">
                        <Reveal keyframes={scaleAnimation} className="reveal">
                            <img src={photographies[currentImageIndex]?.photo} alt="Réalisation"/>
                        </Reveal>
                    </figure>          
                    <div className="realisations_container-slider--arrows">
                        <figure className="arrow arrow-left" onClick={showPreviousImage}>
                            <svg viewBox="0 0 38 41" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5251 27.556L37.5146 27.4117L37.226 25.4326L36.2365 25.5769L36.5251 27.556ZM18.4167 39.5392C18.1622 40.0293 18.3533 40.633 18.8434 40.8875C19.3336 41.142 19.9372 40.951 20.1917 40.4608L18.4167 39.5392ZM36.2365 25.5769C32.3299 26.1466 23.5068 29.736 18.4167 39.5392L20.1917 40.4608C24.9377 31.3203 33.1457 28.0488 36.5251 27.556L36.2365 25.5769Z" fill="#1F1F1F"/>
                                <path d="M1.85551 27.556L0.865977 27.4117L1.15459 25.4326L2.14412 25.5769L1.85551 27.556ZM19.9639 39.5392C20.2184 40.0294 20.0273 40.633 19.5372 40.8875C19.047 41.142 18.4434 40.951 18.1889 40.4608L19.9639 39.5392ZM2.14412 25.5769C6.05072 26.1466 14.8738 29.7361 19.9639 39.5392L18.1889 40.4608C13.4429 31.3204 5.23491 28.0488 1.85551 27.556L2.14412 25.5769Z" fill="#1F1F1F"/>
                                <path d="M17.9609 30.2551C17.9609 30.8074 18.4086 31.2551 18.9609 31.2551C19.5132 31.2551 19.9609 30.8074 19.9609 30.2551L17.9609 30.2551ZM19.9609 30.2551L19.9609 -8.74228e-08L17.9609 8.74228e-08L17.9609 30.2551L19.9609 30.2551Z" fill="#1F1F1F"/>
                            </svg>
                        </figure>
                        <figure className="arrow arrow-right" onClick={showNextImage}>
                            <svg viewBox="0 0 38 41" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5251 27.556L37.5146 27.4117L37.226 25.4326L36.2365 25.5769L36.5251 27.556ZM18.4167 39.5392C18.1622 40.0293 18.3533 40.633 18.8434 40.8875C19.3336 41.142 19.9372 40.951 20.1917 40.4608L18.4167 39.5392ZM36.2365 25.5769C32.3299 26.1466 23.5068 29.736 18.4167 39.5392L20.1917 40.4608C24.9377 31.3203 33.1457 28.0488 36.5251 27.556L36.2365 25.5769Z" fill="#1F1F1F"/>
                                <path d="M1.85551 27.556L0.865977 27.4117L1.15459 25.4326L2.14412 25.5769L1.85551 27.556ZM19.9639 39.5392C20.2184 40.0294 20.0273 40.633 19.5372 40.8875C19.047 41.142 18.4434 40.951 18.1889 40.4608L19.9639 39.5392ZM2.14412 25.5769C6.05072 26.1466 14.8738 29.7361 19.9639 39.5392L18.1889 40.4608C13.4429 31.3204 5.23491 28.0488 1.85551 27.556L2.14412 25.5769Z" fill="#1F1F1F"/>
                                <path d="M17.9609 30.2551C17.9609 30.8074 18.4086 31.2551 18.9609 31.2551C19.5132 31.2551 19.9609 30.8074 19.9609 30.2551L17.9609 30.2551ZM19.9609 30.2551L19.9609 -8.74228e-08L17.9609 8.74228e-08L17.9609 30.2551L19.9609 30.2551Z" fill="#1F1F1F"/>
                            </svg>
                        </figure>
                    </div>
                </div>
                <div className="realisations_container-txt--btn hidden-pc">
                    <a href="/realisations" className="bouton bouton_blanc">Toutes nos réalisations</a>
                </div>
            </div>
        </section>
    ) 
}


export default Realisations;