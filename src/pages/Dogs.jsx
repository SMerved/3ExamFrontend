import React from 'react';
import {useEffect, useState} from "react";
import "../styles/dogs.css"
import dogFacade from "../utils/dogFacade.js";
import Dog from "../components/Dog.jsx";
import ownerFacade from "../utils/ownerFacade.js";

function Dogs({roles}) {
    const [dogs, setDogs] = useState([])
    const [dogsSearch, setDogsSearch] = useState([])
    const [owner, setOwner] = useState(0)
    const [dropdown, setDropdown] = useState(false)
    const [owners, setOwners] = useState([])

    useEffect(()=>{
        ownerFacade.fetchOwners()
            .then(res => setOwners(res))
    },[])

    if (owner !== 0) {
        useEffect(() => {
            dogFacade.fetchDogsFromOwner(owner)
                .then(res => setDogs(res))
        }, [owner])
    }
    if (owner === 0) {
        useEffect(() => {
            dogFacade.fetchDogs()
                .then(res => {
                    setDogs(res)
                    setDogsSearch(res)
                })
        }, [owner])
    }
    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    const handleItem = (own) => {
        setOwner(own)
        setDropdown(!dropdown)
    };
    const handleSearch = (e) => {
        setDogs(dogsSearch)
        setDogs(dogs.filter(dog => dog.name.toLowerCase().includes(e.target.value.toLowerCase())))
    };

    return (
        <div className={"outer_div"}>
            <div className={"top_div"}>
            <div className={"dropdown"}>
                <button className={"dropdown_button"} onClick={handleDropdown}>Owners</button>
                {dropdown ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button onClick={() => handleItem(0)}>All</button>
                        </li>
                        {owners?.map((own) =>
                            <li className="menu-item">
                                <button onClick={() => handleItem(own.id)}>{own.name}</button>
                            </li>
                        )}
                    </ul>
                ) : null}
            </div>
                <input className={"dog_search_bar"} placeholder={"Search by dog name"} type={"search"} onChange={handleSearch}/>
            </div>
            <div className={"dogs_outer_div"}>
                {dogs?.map((dog) =>
                    <Dog dog={dog} roles={roles} setDogs={setDogs}/>
                )}
            </div>
        </div>
    );
}

export default Dogs;