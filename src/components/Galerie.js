import React, { useState, useEffect } from 'react';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation } from "../functions/keyframes";
import Tags from './Tags';
import Lightbox from './Lightbox';
import { useNavigate, useLocation } from 'react-router-dom'; // Importer useNavigate et useLocation
import './Galerie.scss';

const Galerie = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedTag, setSelectedTag] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    // Charger les images à partir du fichier JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/photographies.json');
                const data = await res.json();
                setImages(data.photographies);
                setFilteredImages(data.photographies);
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
        navigate(`?tag=${tag}`, { replace: true }); // Mettre à jour l'URL sans rechargement de page
    };

    const numberOfBoxes = window.innerWidth < 990 ? 3 : 4;
    const imageGroups = Array.from({ length: numberOfBoxes }, () => []);

    filteredImages.forEach((image, index) => {
        const boxIndex = index % numberOfBoxes;
        imageGroups[boxIndex].push({ image, index });
    });

    return (
        <section className="galerie">
            <div className="galerie_title">
                <h2>Toutes nos réalisations</h2>
            </div>

            <Tags onTagClick={handleTagClick} selectedTag={selectedTag} />
            
            <div className="galerie_container">
                {imageGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="box">
                        {group.map(({ image, index }) => ( 
                            <figure key={index} className="galerie_container-image" onClick={() => openLightbox(index)}>
                                <Reveal keyframes={bottomAnimation} triggerOnce={true}>
                                    <img src={image.src} alt={image.alt} />
                                </Reveal>
                            </figure>
                        ))}
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <Lightbox
                    image={filteredImages[selectedImageIndex]}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
            
        </section>
    ) 
}

export default Galerie;
