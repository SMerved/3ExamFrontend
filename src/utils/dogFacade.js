import settings from "../settings.js";
import apiFacade from "./apiFacade.js";

const URL = settings;


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function dogFacade() {

    const fetchDogs = () => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/dogs", options).then(handleHttpErrors);
    }

    const fetchDogsFromOwner = (ownerId) => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/dogs/" + ownerId, options).then(handleHttpErrors);
    }

    return {
        fetchDogsFromOwner,
        fetchDogs
    }
}

const facade = dogFacade();
export default facade;
