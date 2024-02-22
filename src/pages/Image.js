import { useEffect, useState } from 'react';
import './Image.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getObjectDetails , modifyObject, deleteObject} from '../utilities/Server';

function Image() {

    const [objectDetails, setObjectDetails] = useState({});
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag: ''
    });

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const [modalActive, setModalActive] = useState(false);
    const objectId = queryParams.get('id');

    useEffect(() => {
        const fetchObject = async () => {
            try {
                const data = await getObjectDetails(objectId, token);
                setObjectDetails(data);
                setFormData({
                    title: data.title,
                    description: data.description,
                    tag: data.tag
                });
            } 
            catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des détails de l'objet :", error);
            }
        };

        fetchObject();
    }, [objectId, token]);

    const handleEditObjectFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            await modifyObject(objectId, formData, token);
            const newData = await getObjectDetails(objectId, token);
            setObjectDetails(newData);
            setModalActive(false); 
        } 
        catch (error) {
            console.error("Une erreur s'est produite lors de la modification de l'objet :", error);
        }
    };

    const handleEditButtonClick = () => {
        setModalActive(true); 
    };

    const handleCloseButtonClick = (event) => {
        event.stopPropagation();
        setModalActive(false); 
    };

    const handleModalClick = (event) => {
        if (modalActive && !event.target.closest('.modal_form')) {
            setModalActive(false);
        }
    };

    const handleDeleteButtonClick = async () => {
        try {
            await deleteObject(objectId, token);
            navigate("/user");
        } 
        catch (error) {
            console.error("Une erreur s'est produite lors de la suppression de l'objet :", error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };



    return (
        <div className="image">
            <div className="container">
                <div className="container_objet" id="objectDetails">
                    <figure className="container_objet-img">
                        <img src={objectDetails.imageUrl} alt={objectDetails.title} />
                    </figure>
                    <div className="container_objet-details">
                        <h2>{objectDetails.title}</h2>
                        <p className="container_objet-details--description">{objectDetails.description}</p>
                        <button className="bouton btnFiltre">{objectDetails.tag}</button>
                    </div>
                </div>
                <div className="container_buttons">
                    <button className="bouton bouton_invertNoir" onClick={handleEditButtonClick}>Modifier</button>
                    <button className="bouton bouton_invertNoir" onClick={handleDeleteButtonClick}>Supprimer</button>
                </div>
            </div>
            <div className={`modal ${modalActive ? 'active' : ''}`} onClick={handleModalClick}>      
                <form className="modal_form" id="editForm" onSubmit={handleEditObjectFormSubmit}>
                    <button className="modal_form-close" id="closeBtn" type="button" onClick={handleCloseButtonClick}>
                        <div className="modal_form-close-barre modal_form-close-barre--1"></div>
                        <div className="modal_form-close-barre modal_form-close-barre--2"></div>
                    </button>
                    <h2>Modifier ma <br className="hidden-pc"/> photo</h2>
                    <div className="modal_form-fieldset">
                        <fieldset>
                            <label htmlFor="title">Titre</label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="description">Description</label>       
                            <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="tag">Tag</label>
                            <select name="tag" id="tag-select" required value={formData.tag} onChange={handleInputChange}>
                                <option value="salle de bain">Salle de bain</option>
                                <option value="salle de douche">Salle de douche</option>
                                <option value="cuisine">Cuisine</option>
                                <option value="amenagement pmr">Aménagement PMR</option>
                                <option value="mobilier">Mobilier</option>
                                <option value="toilette">Toilette</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <input type="file" id="file" name="image" />
                        </fieldset>
                    </div>
                    <div className="modal_form-bouton">
                        <button className="bouton bouton_noir" type="submit">Valider</button>     
                    </div>             
                </form>
            </div>
        </div>
    )
}

export default Image;