import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Dog({dog, roles}) {
    const [seeWalkers, setSeeWalkers] = useState(false)

    const navigate = useNavigate()
    const handleSeeWalkers = () => {
        setSeeWalkers(!seeWalkers)
    }

    const redirect = () => {
        navigate("/updatedog", {state:{dog : dog}})
    }
    return (
        <div className={"dog_divs"} key={dog.id}>
            <div style={{display:"flex"}}>
            <h2 className={"dog_name"}>{dog.name}</h2>
                {roles.indexOf("admin")>-1 ?
                <>
            <button className={"update_dog_button"} onClick={redirect}>Update Dog</button>
                <button style={{background:"darkred", color:"whitesmoke"}} className={"update_dog_button"}>Delete Dog</button>
                </>
                    : <></>
                }
            </div>
            <img className={"dog_image"} src={dog.image}/>
            <div className={"dog_bottom_div"}>
                <p className={"dog_info"}><strong className={"dog_info_title"}> Breed: </strong> {dog.breed}</p>
                <p className={"dog_info"}><strong className={"dog_info_title"}> Gender: </strong> {dog.gender}</p>
                <p className={"dog_info"}><strong className={"dog_info_title"}> Birthdate: </strong> {dog.birthdate}</p>
                <p className={"dog_info"}><strong className={"dog_info_title"}> Owner: </strong> {dog.owner.name}</p>
            </div>
            <button className={"dog_walker_button"} onClick={handleSeeWalkers}>{seeWalkers ? <>Hide</> : <>See Walkers</>}</button>
            {seeWalkers ?
                <>
                <h3 className={"dog_info"}>Walkers: </h3>
                <ul> {dog.walkers?.map((walker)=>
                    <li className={"dog_info"}>{walker.name}</li> )}</ul>
                </>
                    : <></>
            }
        </div>
    );
}

export default Dog;