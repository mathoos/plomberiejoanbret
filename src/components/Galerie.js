import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation } from "../functions/keyframes";
import Tags from './Tags';
import Lightbox from './Lightbox';

import './Galerie.scss';

const Galerie = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedTag, setSelectedTag] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [visibleImagesCount, setVisibleImagesCount] = useState(16); // Nombre initial d'images visibles

    const navigate = useNavigate();
    const location = useLocation();

    // Fonction pour mélanger les images
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Charger les images à partir du fichier JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/photographies.json');
                const data = await res.json();

                // Créer une liste plate d'images avec leurs tags
                const flattenedImages = [];
                for (const [tag, images] of Object.entries(data.photographies)) {
                    images.forEach(image => flattenedImages.push({ ...image, tag }));
                }

                // Mélanger les images avant de les stocker
                const shuffledImages = shuffleArray(flattenedImages);

                setImages(shuffledImages);
                setFilteredImages(shuffledImages);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // Initialiser selectedTag en fonction de l'URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tag = params.get("tag");
        if (tag) {
            setSelectedTag(tag);
        }
    }, [location.search]);

    // Filtrer les images lorsque selectedTag change
    useEffect(() => {
        if (selectedTag === "all") {
            setFilteredImages(images);
        } else {
            setFilteredImages(images.filter(image => image.tag === selectedTag));
        }
    }, [selectedTag, images]);

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
        setSelectedImageIndex((selectedImageIndex === 0) ? filteredImages.length - 1 : selectedImageIndex - 1);
    };

    const nextImage = () => {
        setSelectedImageIndex((selectedImageIndex === filteredImages.length - 1) ? 0 : selectedImageIndex + 1);
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        navigate(`?tag=${tag}`, { replace: true });
        setVisibleImagesCount(16); // Réinitialiser à 16 images quand on change de tag
    };

    const numberOfBoxes = window.innerWidth < 990 ? 3 : 4;
    const imageGroups = Array.from({ length: numberOfBoxes }, () => []);

    // Limiter les images affichées par le nombre de visibleImagesCount
    const limitedImages = filteredImages.slice(0, visibleImagesCount);

    limitedImages.forEach((image, index) => {
        const boxIndex = index % numberOfBoxes;
        imageGroups[boxIndex].push({ image, index });
    });

    const loadMoreImages = () => {
        setVisibleImagesCount(prevCount => prevCount + 16); // Charger 16 images supplémentaires
    };

    return (
        <section className="galerie">
            <Tags onTagClick={handleTagClick} selectedTag={selectedTag} isHomePage={false} />
            
            <div className="galerie_container">
                {imageGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="box">
                        {group.map(({ image, index }) => ( 
                            <figure key={index} className="galerie_container-image" onClick={() => openLightbox(index)}>                               
                                <img src={image.src} alt={image.alt} />                         
                            </figure>
                        ))}
                    </div>
                ))}
            </div>

            {visibleImagesCount < filteredImages.length && ( // Afficher le bouton si toutes les images ne sont pas visibles
                <button className="bouton bouton_noirTrait" onClick={loadMoreImages}>
                    Afficher plus
                </button>
            )}

            {lightboxOpen && (
                <Lightbox
                    image={filteredImages[selectedImageIndex]}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
        </section>
    );
}

export default Galerie;
