import React, { useState, useEffect } from 'react';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation } from "../functions/keyframes";
import Lightbox from './Lightbox';
import './Galerie.scss';

const Galerie = () => {
    const [images, setImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/photographies.json');
                const data = await res.json();
                setImages(data.photographies);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();    
    }, []);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
        document.documentElement.classList.add('no-scroll');
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImageIndex(null);
        document.documentElement.classList.remove('no-scroll');
    };

    const prevImage = () => {
        if (selectedImageIndex === 0) {
            setSelectedImageIndex(images.length - 1);
        } 
        else {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (selectedImageIndex === images.length - 1) {
            setSelectedImageIndex(0);
        } 
        else {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const numberOfBoxes = window.innerWidth < 990 ? 3 : 4;
    const imageGroups = Array.from({ length: numberOfBoxes }, () => []);

    images.forEach((image, index) => {
        const boxIndex = index % numberOfBoxes;
        imageGroups[boxIndex].push({ image, index });
    });

    return (
        <section className="galerie">
            <div className="galerie_title">
                <h2>Toutes nos réalisations</h2>
            </div>
            
            <div className="galerie_container">
                {imageGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="box">
                        {group.map(({ image, index }) => ( 
                            <figure key={index} className="galerie_container-image" onClick={() => openLightbox(index)}>
                                <Reveal keyframes={bottomAnimation} triggerOnce={true}>
                                    <img src={image} alt="Réalisation de plomberie" />
                                </Reveal>
                            </figure>
                        ))}
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <Lightbox
                    image={images[selectedImageIndex]}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
            
        </section>
    ) 
}

export default Galerie;