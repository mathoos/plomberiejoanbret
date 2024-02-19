import { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import './Galerie.scss';

const Galerie = () => {
    const [images, setImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    useEffect(() => {
        const fetchAndDisplayGallery = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('https://plomberie-serveur.onrender.com/api/auth/api/stuff', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('La requête a échoué');
                }

                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des objets :", error);
            }
        };

        fetchAndDisplayGallery();
    }, []);

    const openLightbox = (index) => {
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const numberOfBoxes = 4; // Nombre de .box que vous avez
    const imagesPerBox = Math.ceil(images.length / numberOfBoxes); // Nombre d'images par .box

    // Diviser les images en groupes correspondant au nombre de .box
    const imageGroups = [];
    for (let i = 0; i < numberOfBoxes; i++) {
        const startIndex = i * imagesPerBox;
        const endIndex = startIndex + imagesPerBox;
        const group = images.slice(startIndex, endIndex);
        imageGroups.push(group);
    }

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