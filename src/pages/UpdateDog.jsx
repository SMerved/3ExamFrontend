import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import '../styles/createdog.css';
import DogDetails from "../components/DogDetails.jsx";
import OwnerDetails from "../components/OwnerDetails.jsx";
import WalkerDetails from "../components/WalkerDetails.jsx";
import dogFacade from "../utils/dogFacade.js";
import walkers from "./Walkers.jsx";

function UpdateDog() {
    const [newDog, setNewDog] = useState({})
    const [newOwner, setNewOwner] = useState({})
    const [newWalker, setNewWalker] = useState({})
    const [newWalkers, setNewWalkers] = useState([])
    const [updateDog, setUpdateDog] = useState({})
    const location = useLocation()
    useEffect(()=>{
        console.log(location.state===undefined)
        if (location.state!==null) {
            setUpdateDog(location.state.dog)
        }
    },[])

    const onChangeOwner = (evt) => {
        const id = evt.target.id.substring(6)
        setNewOwner({...newOwner, [id]: evt.target.value})
    }
    const onChange = (evt) => {
        if (evt.target.name === "gender") {
            setUpdateDog({...newDog, [evt.target.name]: evt.target.value})
        } else {
            setUpdateDog({...newDog, [evt.target.id]: evt.target.value})
        }
        console.log(newDog)
    }

    const onChangeWalker = (evt, walker) => {
        updateDog.walkers.map((w)=>{
            if (w.id===walker.id){
                walker[evt.target.id.substring(7)] = evt.target.value
                setUpdateDog(updateDog)
            }
            })
    }
    const addWalker = (evt) => {
        evt.preventDefault()
        setNewWalkers([...newWalkers, newWalker])
    }

    const submitUpdatedDog = (evt) => {
        evt.preventDefault()
        updateDog.owner = newOwner
        updateDog.walkers = newWalkers
        dogFacade.upDog(updateDog).then((res) => setUpdateDog({}))
    }
    return (
        <div className={"create_dog_div"}>
            <form className={"create_dog_form"}>
                <div className={"create_dog_details"}>
                    <h1>Fill out details about the dog:</h1>
                    <h3>Dog details</h3>
                    <label htmlFor={"id"} className={"create_dog_label"}>Id: </label>
                    <input id={"id"} className={"create_dog_input"} type={"text"} value={updateDog.id} onChange={onChange} required/>
                    <label htmlFor={"name"} className={"create_dog_label"}>Name: </label>
                    <input id={"name"} className={"create_dog_input"} type={"text"} value={updateDog.name} onChange={onChange} required/>
                    <label htmlFor={"breed"} className={"create_dog_label"}>Breed: </label>
                    <input id={"breed"} className={"create_dog_input"} type={"text"} value={updateDog.breed} onChange={onChange} required/>
                    <label htmlFor={"image"} className={"create_dog_label"}>Image: </label>
                    <input id={"image"} className={"create_dog_input"} type={"text"} value={updateDog.image} onChange={onChange} required/>
                    <label className={"create_dog_label"}>Gender: </label>
                    <br/>
                    <label>Male: </label>
                    <input className={"create_dog_radio"} type="radio" name="gender" value="male" onChange={onChange}/>
                    <label>Female: </label>
                    <input className={"create_dog_radio"} type="radio" name="gender" value="female"
                           onChange={onChange}/>
                    <br/>
                    <label htmlFor={"birthdate"} className={"create_dog_label"}>Birthdate: </label>
                    <input id={"birthdate"} className={"create_dog_input"} value={updateDog.birthdate} type={"date"} onChange={onChange} required/>
                </div>
                <div className={"create_dog_details"}>
                    <h3 className={"owner_details"}>Owner details </h3>
                    <label htmlFor={"owner_id"} className={"create_dog_label"}>Id: </label>
                    <input id={"owner_id"} className={"create_dog_input"} value={updateDog.owner?.id} onChange={onChangeOwner} required/>
                    <label htmlFor={"owner_name"} className={"create_dog_label"}>Name: </label>
                    <input id={"owner_name"} className={"create_dog_input"} value={updateDog.owner?.name} onChange={onChangeOwner} required/>
                    <label htmlFor={"owner_address"} className={"create_dog_label"}>Address: </label>
                    <input id={"owner_address"} className={"create_dog_input"} value={updateDog.owner?.address} onChange={onChangeOwner} required/>
                    <label htmlFor={"owner_phone"} className={"create_dog_label"}>Phone number: </label>
                    <input id={"owner_phone"} className={"create_dog_input"} value={updateDog.owner?.phone} onChange={onChangeOwner} required/>
                </div>
                <button className={"create_dog_submit"} type={"submit"} onClick={submitUpdatedDog}>Submit</button>
            </form>
            {updateDog.walkers?.map((walker)=>
                <div style={{padding: "2rem"}}>
                    <form className={"create_dog_details"}>
                        <h3 className={"owner_details"}>Walker(s) details </h3>
                        <label htmlFor={"walker_id"} className={"create_dog_label"}>Id: </label>
                        <input id={"walker_id"} className={"create_dog_input"} value={walker?.id} onChange={(evt)=>onChangeWalker(evt, walker)} required/>
                        <label htmlFor={"walker_name"} className={"create_dog_label"}>Name: </label>
                        <input id={"walker_name"} className={"create_dog_input"} value={walker?.name} onChange={(evt)=>onChangeWalker(evt,walker)} required/>
                        <label htmlFor={"walker_address"} className={"create_dog_label"}>Address: </label>
                        <input id={"walker_address"} className={"create_dog_input"} value={walker?.address} onChange={(evt)=>onChangeWalker(evt, walker)} required/>
                        <label htmlFor={"walker_phone"} className={"create_dog_label"}>Phone number: </label>
                        <input id={"walker_phone"} className={"create_dog_input"} value={walker?.phone} onChange={(evt)=>onChangeWalker(evt, walker)} required/>
                        <button className={"update_dog_walker_button"} type={"submit"} onClick={addWalker}>Update Walker</button>
                    </form>
                </div>
            )}

        </div>
    );
}

export default UpdateDog;