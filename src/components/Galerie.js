import { useState, useEffect } from 'react';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation , scaleAnimation } from "../functions/keyframes";
import { getAllStuff } from "../utilities/Server";
import Lightbox from './Lightbox';
import './Galerie.scss';

const Galerie = () => {
    const [images, setImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllStuff();
                setImages(data);
            } 
            catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des objets :", error);
            }
        };
        fetchData();
    }, []);

    const openLightbox = () => {
        setLightboxOpen(true);
        document.documentElement.classList.add('no-scroll');
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.documentElement.classList.remove('no-scroll');
    };

    const numberOfBoxes = 4; 
    const imageGroups = Array.from({ length: numberOfBoxes }, () => []);

    images.forEach((image, index) => {
        const boxIndex = index % numberOfBoxes;
        imageGroups[boxIndex].push(image);
    });

    return (
        <section className="galerie">
            <div className="galerie_title">
                <h2>Toutes nos réalisations</h2>
            </div>
            
            <div className="galerie_container">
                {imageGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="box">
                        {group.map((image, index) => (
                            <figure key={index} className="galerie_container-image" onClick={() => openLightbox(index)}>
                                <Reveal keyframes={bottomAnimation} triggerOnce="true">
                                    <img src={image.imageUrl} alt={image.title} />
                                </Reveal>
                            </figure>
                        ))}
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <Lightbox
                    image={images}
                    onClose={closeLightbox}
                />
            )}
            
        </section>
    ) 
}

export default Galerie;