import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllStuff, createObject } from "../utilities/Server"; 
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar';
import './User.scss';

const User = () => {
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    const [things, setThings] = useState([]);
    const [modalActive, setModalActive] = useState(false); 

    const closeModal = () => {
        setModalActive(false);
    };

    const handleAddButtonClick = () => {
        setModalActive(true); 
    };

    const handleCloseButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation(); 
        closeModal();
    };

    const handleModalClick = (event) => {
        if (modalActive && !event.target.closest('.modal_form')) {
            closeModal();
        }
    };

    const handleCreateObjectFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            await createObject(formData, token);
            event.target.reset();
            closeModal();
            fetchData();
        } 
        catch (error) {
            console.error("Une erreur s'est produite lors de la création de l'objet :", error);
        }
    };

    const handleCardClick = async (objectId) => {
        navigate(`/image?id=${objectId}&token=${encodeURIComponent(token)}`);
    };

    const fetchData = async () => {
        try {
            const data = await getAllStuff();
            setThings(data); 
        } 
        catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des objets :", error);
        }
    };

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        const fetchData = async () => {
            try {
                const data = await getAllStuff();
                setThings(data); 
            } 
            catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des objets :", error);
            }
        };
        fetchData();
    }, [token, navigate]); 

    

    return (
        <div className="user">
            <Navbar isUserPage={true}/>
            <div className="container">
                <h2 className="h2">Mes photos</h2>
                <div className="container_buttons">
                    <button className="container_buttons-btn" id="addBtn" onClick={handleAddButtonClick}>
                        Ajouter
                    </button>
                </div>
                <div className="container_images">
                    {things.map(thing => (
                        <div key={thing._id} className="card" onClick={() => handleCardClick(thing._id)}>
                            <img src={thing.imageUrl} alt={thing.title} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`modal ${modalActive ? 'active' : ''}`} onClick={handleModalClick}>
                <form className="modal_form" id="createForm" onSubmit={handleCreateObjectFormSubmit}>
                    <button className="modal_form-close" id="closeBtn" onClick={handleCloseButtonClick}>
                        <div className="modal_form-close-barre modal_form-close-barre--1"></div>
                        <div className="modal_form-close-barre modal_form-close-barre--2"></div>
                    </button>
                    <h2 className="h2">Ajouter une photo</h2>
                    <div className="modal_form-fieldset">
                        <fieldset>
                            <label htmlFor="title">Titre</label>
                            <input type="text" id="title" name="title" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" required></textarea>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="tag">Tag</label>
                            <select name="tag" id="tag-select" required>
                                <option value="salle de bain">Salle de bain</option>
                                <option value="salle de douche">Salle de douche</option>
                                <option value="cuisine">Cuisine</option>
                                <option value="amenagement pmr">Aménagement PMR</option>
                                <option value="mobilier">Mobilier</option>
                                <option value="toilette">Toilette</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <input type="file" id="file" name="image" required />
                        </fieldset>
                    </div>
                    <div className="modal_form-create">
                        <button type="submit">Créer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default User;