import React, {useEffect} from 'react';

function DogDetails({newDog, setNewDog, updateDog, setUpdateDog}) {

    useEffect(()=>{
        if (updateDog!==null) {
            setNewDog(updateDog)
        }
    },[])
    const onChange = (evt) => {
        if (evt.target.name === "gender") {
            setNewDog({...newDog, [evt.target.name]: evt.target.value})
        } else {
            setNewDog({...newDog, [evt.target.id]: evt.target.value})
        }
        console.log(newDog)
    }
    return (
        <div className={"create_dog_details"}>
            <h1>Fill out details about the dog:</h1>
            <h3>Dog details</h3>
            <label htmlFor={"name"} className={"create_dog_label"}>Name: </label>
            <input id={"name"} className={"create_dog_input"} type={"text"} value={newDog.name} onChange={onChange} required/>
            <label htmlFor={"breed"} className={"create_dog_label"}>Breed: </label>
            <input id={"breed"} className={"create_dog_input"} type={"text"} value={newDog.breed} onChange={onChange} required/>
            <label htmlFor={"image"} className={"create_dog_label"}>Image: </label>
            <input id={"image"} className={"create_dog_input"} type={"text"} value={newDog.image} onChange={onChange} required/>
            <label className={"create_dog_label"}>Gender: </label>
            <br/>
            <label>Male: </label>
            <input className={"create_dog_radio"} type="radio" name="gender" value="male" onChange={onChange}/>
            <label>Female: </label>
            <input className={"create_dog_radio"} type="radio" name="gender" value="female"
                   onChange={onChange}/>
            <br/>
            <label htmlFor={"birthdate"} className={"create_dog_label"}>Birthdate: </label>
            <input id={"birthdate"} className={"create_dog_input"} value={newDog.birthdate} type={"date"} onChange={onChange} required/>
        </div>
    );
}

export default DogDetails;