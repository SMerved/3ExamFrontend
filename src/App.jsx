import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Walkers from "./pages/Walkers.jsx";
import Dogs from "./pages/Dogs.jsx";
import CreateDog from "./pages/CreateDog.jsx";
import UpdateDog from "./pages/UpdateDog.jsx";

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [roles, setRoles] = useState([])

    return (
        <>
            <Header username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} loggedIn={loggedIn} roles={roles} setRoles={setRoles}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="walkers" element={<Walkers roles={roles}/>}/>
                <Route path="dogs" element={<Dogs roles={roles}/>}/>
                <Route path="createdog" element={<CreateDog />}/>
                <Route path="updatedog" element={<UpdateDog />}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
