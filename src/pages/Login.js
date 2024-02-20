import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { loginUser } from "../utilities/Server";
import {setToken} from "../utilities/Slice";

import './Login.scss';


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await loginUser(email, password); 
            const token = response.token; 
            localStorage.setItem('token', token);

            dispatch(setToken(token));
            navigate("/user"); 
        } 
        catch (error) {
            console.log(error.response.data); 
            setMessage("L'authentification a échouée");
        }
    };


    return (
        <div className="connexion">
            <form className="connexion_form" id="loginForm" onSubmit={handleSubmit}>
                <h2 className="h2">Se connecter</h2>
                <div className="connexion_form-fieldset">
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                    </fieldset>
                    <fieldset id="error-message" className="error-message">
                        {message ? <p>{message}</p> : null}
                    </fieldset>       
                </div>
                <div className="connexion_form-connect">
                    <button type="submit">Se connecter</button>
                </div>  
            </form>
        </div>
    )
}

export default Login;