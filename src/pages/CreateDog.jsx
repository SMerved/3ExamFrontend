import React, {useState} from 'react';
import dogFacade from "../utils/dogFacade.js";
import '../styles/createdog.css';
import walkers from "./Walkers.jsx";

function CreateDog() {
    const [newDog, setNewDog] = useState({})
    const [newOwner, setNewOwner] = useState({})
    const [newWalker, setNewWalker] = useState({})
    const [newWalkers, setNewWalkers] = useState([])
    const onChange = (evt) => {
        if (evt.target.name === "gender") {
            setNewDog({...newDog, [evt.target.name]: evt.target.value})
        } else {
            setNewDog({...newDog, [evt.target.id]: evt.target.value})
        }
        console.log(newDog)
    }

    const onChangeOwner = (evt) => {
        const id = evt.target.id.substring(6)
        setNewOwner({...newOwner, [id]: evt.target.value})
    }
    const onChangeWalker = (evt) => {
        const id = evt.target.id.substring(7)
        setNewWalker({...newWalker, [id]: evt.target.value})
    }
    const addWalker = (evt) => {
        evt.preventDefault()
        setNewWalkers([...newWalkers, newWalker])
    }
    const submitNewDog = (evt) => {
        evt.preventDefault()
        newDog.owner = newOwner
        newDog.walkers = newWalkers
        dogFacade.createDog(newDog).then((res) => setNewDog({}))
    }
    return (
        <div className={"create_dog_div"}>
            <form className={"create_dog_form"}>
                <div className={"create_dog_details"}>
                    <h1>Fill out details about the dog:</h1>
                    <h3>Dog details</h3>
                    <label htmlFor={"name"} className={"create_dog_label"}>Name: </label>
                    <input id={"name"} className={"create_dog_input"} type={"text"} onChange={onChange} required/>
                    <label htmlFor={"breed"} className={"create_dog_label"}>Breed: </label>
                    <input id={"breed"} className={"create_dog_input"} type={"text"} onChange={onChange} required/>
                    <label htmlFor={"image"} className={"create_dog_label"}>Image: </label>
                    <input id={"image"} className={"create_dog_input"} type={"text"} onChange={onChange} required/>
                    <label className={"create_dog_label"}>Gender: </label>
                    <br/>
                    <label>Male: </label>
                    <input className={"create_dog_radio"} type="radio" name="gender" value="male" onChange={onChange}/>
                    <label>Female: </label>
                    <input className={"create_dog_radio"} type="radio" name="gender" value="female"
                           onChange={onChange}/>
                    <br/>
                    <label htmlFor={"birthdate"} className={"create_dog_label"}>Birthdate: </label>
                    <input id={"birthdate"} className={"create_dog_input"} type={"date"} onChange={onChange} required/>
                </div>
                <div className={"create_dog_details"}>
                    <h3 className={"owner_details"}>Owner details </h3>
                    <label htmlFor={"owner_name"} className={"create_dog_label"}>Name: </label>
                    <input id={"owner_name"} className={"create_dog_input"} onChange={onChangeOwner} required/>
                    <label htmlFor={"owner_address"} className={"create_dog_label"}>Address: </label>
                    <input id={"owner_address"} className={"create_dog_input"} onChange={onChangeOwner} required/>
                    <label htmlFor={"owner_phone"} className={"create_dog_label"}>Phone number: </label>
                    <input id={"owner_phone"} className={"create_dog_input"} onChange={onChangeOwner} required/>
                </div>
                <button className={"create_dog_submit"} type={"submit"} onClick={submitNewDog}>Submit</button>
            </form>
            <div style={{padding: "2rem"}}>
                <form className={"create_dog_details"}>
                    <h3 className={"owner_details"}>Walker(s) details </h3>
                    <label htmlFor={"walker_name"} className={"create_dog_label"}>Name: </label>
                    <input id={"walker_name"} className={"create_dog_input"} onChange={onChangeWalker} required/>
                    <label htmlFor={"walker_address"} className={"create_dog_label"}>Address: </label>
                    <input id={"walker_address"} className={"create_dog_input"} onChange={onChangeWalker} required/>
                    <label htmlFor={"walker_phone"} className={"create_dog_label"}>Phone number: </label>
                    <input id={"walker_phone"} className={"create_dog_input"} onChange={onChangeWalker} required/>
                    <button className={"create_dog_walker_button"} type={"submit"} onClick={addWalker}>Add Walker</button>
                </form>
            </div>
        </div>
    );

}

export default CreateDog;