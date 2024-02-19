import { useState, useEffect } from 'react';
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
                setImages(data); // Mettre à jour l'état avec les objets récupérés
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des objets :", error);
            }
        };
        fetchData();
    }, []); // Effectuer la requête à chaque changement du token

    const openLightbox = (index) => {
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const numberOfBoxes = 4; // Nombre de .box que vous avez
    const imageGroups = Array.from({ length: numberOfBoxes }, () => []);

    // Distribuer les images dans chaque groupe
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
                                <img src={image.imageUrl} alt={image.title} />
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