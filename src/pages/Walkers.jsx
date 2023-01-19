import React from 'react';
import {useEffect, useState} from "react";
import walkerFacade from "../utils/walkerFacade.js";
import '../styles/walkers.css';

function Walkers({roles}) {
    const [walkers, setWalkers] = useState([])
    useEffect(()=> {
        walkerFacade.fetchWalkers()
            .then(res => setWalkers(res))
    }, [])
    return (
        <div className={"walkers_div"}>
            {walkers?.map((walker)=>
                <div className={"walker_div"}><h4>Name: {walker.name}</h4>
                    <p>Address: {walker.address}</p>
                   <p>Phone number: {walker.phone}</p>
                </div>
            )}
            {roles.indexOf("user")>-1 ?
                <>
                </>
                :
                <>
                    <h3>Only for users</h3>
                </>}
        </div>
    );
}

export default Walkers;