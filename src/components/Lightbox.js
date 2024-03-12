import { useState , useEffect} from 'react';
import { add100Vh } from '../functions/add100vh';
import './Lightbox.scss';

const Lightbox = ({ image, onClose, onPrev, onNext }) => {
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX && touchEndX) {
            const deltaX = touchEndX - touchStartX;
            if (deltaX > 50) {
                onPrev();
            } 
            else if (deltaX < -50) {
                onNext();
            }
        }
        setTouchStartX(null);
        setTouchEndX(null);
    };

    useEffect(() => {
        add100Vh();
    }, []);

    return (
        <div className="galerie" onClick={onClose}>
            <div className="lightbox heightJs" onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="lightbox_image">
                    <img src={image} alt="coucou"/>         
                </div>

                <div className="lightbox_details">

                    <div className="lightbox_arrows">
                        <button className="arrow lightbox-prev" onClick={onPrev}>
                            <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5251 27.556L37.5146 27.4117L37.226 25.4326L36.2365 25.5769L36.5251 27.556ZM18.4167 39.5392C18.1622 40.0293 18.3533 40.633 18.8434 40.8875C19.3336 41.142 19.9372 40.951 20.1917 40.4608L18.4167 39.5392ZM36.2365 25.5769C32.3299 26.1466 23.5068 29.736 18.4167 39.5392L20.1917 40.4608C24.9377 31.3203 33.1457 28.0488 36.5251 27.556L36.2365 25.5769Z"/>
                                <path d="M1.85551 27.556L0.865977 27.4117L1.15459 25.4326L2.14412 25.5769L1.85551 27.556ZM19.9639 39.5392C20.2184 40.0294 20.0273 40.633 19.5372 40.8875C19.047 41.142 18.4434 40.951 18.1889 40.4608L19.9639 39.5392ZM2.14412 25.5769C6.05072 26.1466 14.8738 29.7361 19.9639 39.5392L18.1889 40.4608C13.4429 31.3204 5.23491 28.0488 1.85551 27.556L2.14412 25.5769Z"/>
                                <path d="M17.9609 30.2551C17.9609 30.8074 18.4086 31.2551 18.9609 31.2551C19.5132 31.2551 19.9609 30.8074 19.9609 30.2551L17.9609 30.2551ZM19.9609 30.2551L19.9609 -8.74228e-08L17.9609 8.74228e-08L17.9609 30.2551L19.9609 30.2551Z"/>
                            </svg>
                        </button>
                        <button className="arrow lightbox-next" onClick={onNext}>
                            <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5251 27.556L37.5146 27.4117L37.226 25.4326L36.2365 25.5769L36.5251 27.556ZM18.4167 39.5392C18.1622 40.0293 18.3533 40.633 18.8434 40.8875C19.3336 41.142 19.9372 40.951 20.1917 40.4608L18.4167 39.5392ZM36.2365 25.5769C32.3299 26.1466 23.5068 29.736 18.4167 39.5392L20.1917 40.4608C24.9377 31.3203 33.1457 28.0488 36.5251 27.556L36.2365 25.5769Z"/>
                                <path d="M1.85551 27.556L0.865977 27.4117L1.15459 25.4326L2.14412 25.5769L1.85551 27.556ZM19.9639 39.5392C20.2184 40.0294 20.0273 40.633 19.5372 40.8875C19.047 41.142 18.4434 40.951 18.1889 40.4608L19.9639 39.5392ZM2.14412 25.5769C6.05072 26.1466 14.8738 29.7361 19.9639 39.5392L18.1889 40.4608C13.4429 31.3204 5.23491 28.0488 1.85551 27.556L2.14412 25.5769Z"/>
                                <path d="M17.9609 30.2551C17.9609 30.8074 18.4086 31.2551 18.9609 31.2551C19.5132 31.2551 19.9609 30.8074 19.9609 30.2551L17.9609 30.2551ZM19.9609 30.2551L19.9609 -8.74228e-08L17.9609 8.74228e-08L17.9609 30.2551L19.9609 30.2551Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <button className="lightbox_close" onClick={onClose}>
                    <div className="lightbox_close-barre lightbox_close-barre--1"></div>
                    <div className="lightbox_close-barre lightbox_close-barre--2"></div>
                </button>
            </div>
        </div>
    );
};

export default Lightbox;