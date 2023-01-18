import settings from "../settings.js";
import apiFacade from "./apiFacade.js";

const URL = settings;


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function walkerFacade() {

    const fetchWalkers = () => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/walkers", options).then(handleHttpErrors);
    }

    return {
        fetchWalkers
    }
}

const facade = walkerFacade();
export default facade;
