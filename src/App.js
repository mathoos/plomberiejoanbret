import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';

import Home from './pages/Home';
import Realisations from './pages/Realisations';
import Login from './pages/Login';
import User from './pages/User';
import Image from './pages/Image';

function App() {
    
    return (
        <Router>
            <Routes>      
                <Route path="/" element={<Home/>}/>
                <Route path="/realisations" element={<Realisations/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/image" element={<Image/>}/>
            </Routes>
		</Router>
    );
}


export default App;
