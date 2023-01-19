import React, {useState} from 'react';
import dogFacade from "../utils/dogFacade.js";
import '../styles/createdog.css';
import OwnerDetails from "../components/OwnerDetails.jsx";
import WalkerDetails from "../components/WalkerDetails.jsx";
import DogDetails from "../components/DogDetails.jsx";

function CreateDog() {
    const [newDog, setNewDog] = useState({})
    const [newOwner, setNewOwner] = useState({})
    const [newWalker, setNewWalker] = useState({})
    const [newWalkers, setNewWalkers] = useState([])

    const submitNewDog = (evt) => {
        evt.preventDefault()
        newDog.owner = newOwner
        newDog.walkers = newWalkers
        dogFacade.createDog(newDog).then((res) => setNewDog({}))
    }
    return (
        <div className={"create_dog_div"}>
            <form className={"create_dog_form"}>
                <DogDetails newDog={newDog} setNewDog={setNewDog}/>
                <OwnerDetails newOwner={newOwner} setNewOwner={setNewOwner}/>
                <button className={"create_dog_submit"} type={"submit"} onClick={submitNewDog}>Submit</button>
            </form>
            <WalkerDetails newWalker={newWalker} setNewWalker={setNewWalker} newWalkers={newWalkers} setNewWalkers={setNewWalkers}/>
        </div>
    );

}

export default CreateDog;