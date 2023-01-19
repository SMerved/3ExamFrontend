import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import '../styles/createdog.css';
import DogDetails from "../components/DogDetails.jsx";
import OwnerDetails from "../components/OwnerDetails.jsx";
import WalkerDetails from "../components/WalkerDetails.jsx";
import dogFacade from "../utils/dogFacade.js";

function UpdateDog() {
    const [newDog, setNewDog] = useState({})
    const [newOwner, setNewOwner] = useState({})
    const [newWalker, setNewWalker] = useState({})
    const [newWalkers, setNewWalkers] = useState([])
    const [updateDog, setUpdateDog] = useState({})
    const location = useLocation()
    useEffect(()=>{
        if (location.state!==null) {
            setUpdateDog(location.state.dog)
        }
    },[])

    const submitUpdatedDog = (evt) => {
        evt.preventDefault()
        newDog.owner = newOwner
        newDog.walkers = newWalkers
        dogFacade.upDog(newDog).then((res) => setNewDog({}))
    }
    return (
        <div className={"create_dog_div"}>
            <form className={"create_dog_form"}>
                <DogDetails newDog={newDog} setNewDog={setNewDog} updateDog={updateDog} setUpdateDog={setUpdateDog}/>
            </form>
        </div>
    );
}

export default UpdateDog;