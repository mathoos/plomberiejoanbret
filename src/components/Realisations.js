import React, { useState, useEffect, useRef } from 'react';
import './Realisations.scss';


const Realisations = () => {

    const [isMobile, setIsMobile] = useState(false);

    const [photographies, setPhotographies] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
    const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const [maxHeightTitles, setMaxHeightTitles] = useState(0);
    const [maxHeightSubtitles, setMaxHeightSubtitles] = useState(0);
    const [maxHeightDescriptions, setMaxHeightDescriptions] = useState(0);

    const slidesRef = useRef(null);
    const slidesTitlesRef = useRef(null);
    const slidesSubtitlesRef = useRef(null);
    const slidesDescriptionsRef = useRef(null);

    const titlesRefs = useRef([]);
    const subtitlesRefs = useRef([]);
    const descriptionsRefs = useRef([]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');  // Par exemple, pour les écrans mobiles
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);  // Mettre à jour l'état en fonction de la media query
        };

        // Vérifier initialement si la condition de la media query est remplie
        handleMediaQueryChange(mediaQuery);

        // Ajouter un écouteur d'événements pour surveiller le redimensionnement
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Nettoyage lors du démontage
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/realisationsPreview.json');
                const data = await res.json();
                // Charger les images normalement pour ensuite les doubler dans l’affichage
                setPhotographies([...data.photographies, ...data.photographies]); // Duplication
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (slidesRef.current) {
            if (isMobile) {
                slidesRef.current.style.transform = `translateX(-${currentImageIndex * 100}vw)`; // Ajuster pour mobile
            } 
            else {
                slidesRef.current.style.transform = `translateX(-${currentImageIndex * 35}vw)`; // Valeur par défaut pour écran plus large
            }
        }
    }, [currentImageIndex, isMobile]);

    // Mesurer la hauteur de chaque titre et trouver la hauteur maximale
    useEffect(() => {
        if (titlesRefs.current.length > 0) {
            const maxHeightTitles = Math.max(...titlesRefs.current.map(ref => ref?.clientHeight || 0));
            setMaxHeightTitles(maxHeightTitles);
        }
        if (subtitlesRefs.current.length > 0) {
            const maxHeightSubtitles = Math.max(...subtitlesRefs.current.map(ref => ref?.clientHeight || 0));
            setMaxHeightSubtitles(maxHeightSubtitles);
        }
        if (descriptionsRefs.current.length > 0) {
            const maxHeightDescriptions = Math.max(...descriptionsRefs.current.map(ref => ref?.clientHeight || 0));
            setMaxHeightDescriptions(maxHeightDescriptions);
        }
    }, [photographies, titlesRefs, subtitlesRefs, descriptionsRefs]);

    useEffect(() => {
        if (slidesTitlesRef.current) {
            slidesTitlesRef.current.style.top = `-${maxHeightTitles}px`;
        }
        if (slidesSubtitlesRef.current) {
            slidesSubtitlesRef.current.style.top = `-${maxHeightSubtitles}px`;
        }
        if (slidesDescriptionsRef.current) {
            slidesDescriptionsRef.current.style.top = `-${maxHeightDescriptions}px`;
        }
    }, [maxHeightTitles, maxHeightSubtitles, maxHeightDescriptions]);

    const showNextImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentImageIndex(prevIndex => prevIndex + 1);
        setCurrentTitleIndex(prevIndex => prevIndex + 1);
        setCurrentSubtitleIndex(prevIndex => prevIndex + 1);
        setCurrentDescriptionIndex(prevIndex => prevIndex + 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        const half = photographies.length / 2;
        
        // Remettre à zéro sans transition visible lorsqu’on atteint la fin de la première copie
        if (currentImageIndex >= half) {
            slidesRef.current.style.transition = 'none';
            slidesTitlesRef.current.style.transition = 'none';
            slidesSubtitlesRef.current.style.transition = 'none';
            slidesDescriptionsRef.current.style.transition = 'none';
            setCurrentImageIndex(0);
            setCurrentTitleIndex(0);
            setCurrentSubtitleIndex(0);
            setCurrentDescriptionIndex(0);
            slidesRef.current.style.transform = `translateX(0px)`;
            slidesTitlesRef.current.style.transform = `translateY(0px)`;
            slidesSubtitlesRef.current.style.transform = `translateY(0px)`;
            slidesDescriptionsRef.current.style.transform = `translateY(0px)`;
        } 
        else if (currentImageIndex < 0) {
            // Ou repositionner à la fin en cas de défilement vers la gauche
            slidesRef.current.style.transition = 'none';
            slidesTitlesRef.current.style.transition = 'none';
            slidesSubtitlesRef.current.style.transition = 'none';
            slidesDescriptionsRef.current.style.transition = 'none';
            setCurrentImageIndex(half - 1);
            setCurrentTitleIndex(half - 1);
            setCurrentSubtitleIndex(half - 1);
            setCurrentDescriptionIndex(half - 1);
            slidesTitlesRef.current.style.transform = `translateY(-${(half - 1) * maxHeightTitles}px)`;
            slidesSubtitlesRef.current.style.transform = `translateY(-${(half - 1) * maxHeightSubtitles}px)`;
            slidesDescriptionsRef.current.style.transform = `translateY(-${(half - 1) * maxHeightDescriptions}px)`;
        }
    };

    useEffect(() => {
        // Gérer la transition et repositionnement en cas de dépassement des limites
        const half = photographies.length / 2;
        if (currentImageIndex >= 0 && currentImageIndex < half) {
            slidesRef.current.style.transition = `transform 1s ease-in-out`;
            if (isMobile) {
                // Si c'est mobile, on ajuste la valeur de la transformation
                slidesRef.current.style.transform = `translateX(-${currentImageIndex * 100}vw)`; // Par exemple, plus large pour mobile
            } else {
                // Sinon, pour les écrans plus larges, on applique la transformation par défaut
                slidesRef.current.style.transform = `translateX(-${currentImageIndex * 35}vw)`;
            }
            slidesTitlesRef.current.style.transition = `transform 1s ease-in-out`;
            slidesTitlesRef.current.style.transform = `translateY(-${currentTitleIndex * maxHeightTitles}px)`;
            slidesSubtitlesRef.current.style.transition = `transform .8s ease-in-out .2s`;
            slidesSubtitlesRef.current.style.transform = `translateY(-${currentSubtitleIndex * maxHeightSubtitles}px)`;
            slidesDescriptionsRef.current.style.transition = `transform .7s ease-in-out .3s`;
            slidesDescriptionsRef.current.style.transform = `translateY(-${currentDescriptionIndex * maxHeightDescriptions}px)`;
        }
    },);

    


    return (
        <div className="realisations" id="realisations">
            <section className="realisations_container">

                <div className="realisations_container-txt">
                    <div className="container-txt">
                        <div className="container-txt_content">
                            <div className="container-txt_content--title" style={{ height: `${maxHeightTitles}px` }}>
                                <div 
                                    ref={slidesTitlesRef}
                                    className="slides-titles"
                                    onTransitionEnd={handleTransitionEnd}
                                    style={{ transform: `translateY(-${currentTitleIndex * maxHeightTitles}px)` }}
                                >
                                    {photographies.map((photo, index) => (
                                        <h2 
                                            key={index} 
                                            style={{ minHeight: `${maxHeightTitles}px` }}
                                            ref={el => titlesRefs.current[index] = el} 
                                            dangerouslySetInnerHTML={{__html: photo.title}}
                                        ></h2>
                                    ))}
                                </div>
                            </div>    
                            <div className="container-txt_content--subtitle" style={{ height: `${maxHeightSubtitles}px` }}>
                                <div 
                                    ref={slidesSubtitlesRef}
                                    className="slides-subtitles"
                                    onTransitionEnd={handleTransitionEnd}
                                    style={{ transform: `translateY(-${currentSubtitleIndex * maxHeightSubtitles}px)` }}
                                >
                                    {photographies.map((photo, index) => (
                                        <p 
                                            className="subtitle" 
                                            style={{ minHeight: `${maxHeightSubtitles}px` }}
                                            key={index} 
                                            ref={el => subtitlesRefs.current[index] = el} 
                                            dangerouslySetInnerHTML={{__html: photo.subtitle}}> 
                                        </p>
                                    ))}
                                </div>
                            </div>                  
                        </div>
                        <div className="container-txt_content">
                            <div className="container-txt_content--description" style={{ height: `${maxHeightDescriptions}px` }}>
                                <div 
                                    ref={slidesDescriptionsRef}
                                    className="slides-descriptions"
                                    onTransitionEnd={handleTransitionEnd}
                                    style={{ transform: `translateY(-${currentDescriptionIndex * maxHeightDescriptions}px)` }}
                                >
                                    {photographies.map((photo, index) => (
                                        <p 
                                            className="description" 
                                            style={{ minHeight: `${maxHeightDescriptions}px` }}
                                            key={index} 
                                            ref={el => descriptionsRefs.current[index] = el}
                                            dangerouslySetInnerHTML={{__html: photo.description}}>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <a href="/realisations" className="bouton bouton_beige hidden-mobile">Toutes nos réalisations</a>
                    </div>
                    <div className="realisations_container-txt--arrows">
                        <figure className="arrow arrow-right" onClick={showNextImage}>
                            <svg viewBox="0 0 38 41" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5251 27.556L37.5146 27.4117L37.226 25.4326L36.2365 25.5769L36.5251 27.556ZM18.4167 39.5392C18.1622 40.0293 18.3533 40.633 18.8434 40.8875C19.3336 41.142 19.9372 40.951 20.1917 40.4608L18.4167 39.5392ZM36.2365 25.5769C32.3299 26.1466 23.5068 29.736 18.4167 39.5392L20.1917 40.4608C24.9377 31.3203 33.1457 28.0488 36.5251 27.556L36.2365 25.5769Z" fill="#1F1F1F"/>
                                <path d="M1.85551 27.556L0.865977 27.4117L1.15459 25.4326L2.14412 25.5769L1.85551 27.556ZM19.9639 39.5392C20.2184 40.0294 20.0273 40.633 19.5372 40.8875C19.047 41.142 18.4434 40.951 18.1889 40.4608L19.9639 39.5392ZM2.14412 25.5769C6.05072 26.1466 14.8738 29.7361 19.9639 39.5392L18.1889 40.4608C13.4429 31.3204 5.23491 28.0488 1.85551 27.556L2.14412 25.5769Z" fill="#1F1F1F"/>
                                <path d="M17.9609 30.2551C17.9609 30.8074 18.4086 31.2551 18.9609 31.2551C19.5132 31.2551 19.9609 30.8074 19.9609 30.2551L17.9609 30.2551ZM19.9609 30.2551L19.9609 -8.74228e-08L17.9609 8.74228e-08L17.9609 30.2551L19.9609 30.2551Z" fill="#1F1F1F"/>
                            </svg>
                        </figure>
                    </div>
                </div>

                <div className="realisations_container-slider">

                    <div className="coucou">
                        <div
                            ref={slidesRef}
                            className="slides"
                            onTransitionEnd={() => console.log('Transition terminée')}
                        >
                            {photographies.map((photo, index) => (
                                <figure key={index} className="slide">
                                    <img src={photo.photo} alt="Réalisation" />
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="realisations_container-bouton hidden-pc">
                    <a href="/realisations" className="bouton bouton_beige">Toutes nos réalisations</a>
                </div>
               
            </section>
        </div>
                    
    ) 
}


export default Realisations;