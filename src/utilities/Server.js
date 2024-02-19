const API_BASE_AUTH = "https://plomberie-serveur.onrender.com/api/auth";
const API_BASE_STUFF = "https://plomberie-serveur.onrender.com/api/stuff";


export const loginUser = async (email, password) => {
    try {
        // On envoie une requête de connexion POST à l'API de connexion avec les données de l'utilisateur saisies dans le formulaire
        const response = await fetch(`${API_BASE_AUTH}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        // On traite la réponse de l'API
        const responseData = await response.json();
        return responseData;
    } 

    catch (error) {
        console.error("Erreur lors de la requête de connexion :", error);
        throw error;
    }
}

export const getAllStuff = async (token) => {
    try {
        const response = await fetch(`${API_BASE_STUFF}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        const data = await response.json();
        return data;
    } 
    catch (error) {
        throw new Error(`Une erreur s'est produite lors de la récupération des objets : ${error.message}`);
    }
};


export const createObject = async (formData, token) => {
    try {
        const response = await fetch(`${API_BASE_STUFF}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        throw error;
    }
};


export const getObjectDetails = async (objectId, token) => {
    try {
        const response = await fetch(`${API_BASE_STUFF}/${objectId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Une erreur s'est produite lors de la récupération des détails de l'objet : ${error.message}`);
    }
}


export const modifyObject = async (objectId, formData, token) => {
    try {
        const response = await fetch(`${API_BASE_STUFF}/${objectId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        const data = await response.json();
        console.log(data.message);
        // Vous pouvez ajouter d'autres actions après la modification réussie de l'objet
        return data; // Vous pouvez également retourner des données supplémentaires si nécessaire
    } catch (error) {
        console.error("Une erreur s'est produite lors de la modification de l'objet :", error);
        throw error;
    }
};


export const deleteObject = async (objectId, token) => {
    try {
        // Effectuez une requête DELETE à l'API pour supprimer l'objet
        const response = await fetch(`${API_BASE_STUFF}/${objectId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Vérifiez si la requête a réussi
        if (response.ok) {
            return { success: true, message: 'Objet supprimé avec succès' };
        } else {
            throw new Error('La suppression de l\'objet a échoué');
        }
    } catch (error) {
        // Gérez les erreurs
        throw new Error('Une erreur s\'est produite lors de la suppression de l\'objet : ' + error.message);
    }
};

export const logoutUser = async (token) => {
    try {
        await fetch(`${API_BASE_AUTH}/logout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return { message: 'Déconnexion réussie' };
    } catch (error) {
        throw new Error("Erreur lors de la déconnexion de l'utilisateur :", error);
    }
};