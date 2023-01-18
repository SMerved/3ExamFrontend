import React from 'react';
import {useEffect, useState} from "react";
import walkerFacade from "../utils/walkerFacade.js";
import '../styles/walkers.css';

function Walkers() {
    const [walkers, setWalkers] = useState([])
    useEffect(()=> {
        walkerFacade.fetchWalkers()
            .then(res => setWalkers(res))
    }, [])
    return (
        <div className={"walker_table"}>
            {walkers?.map((walker)=>
                <ul>{walker.name} {walker.address} {walker.phone}</ul>
            )}
        </div>
    );
}

export default Walkers;