import React, {useState} from 'react';

function Dog({dog}) {
    const [seeWalkers, setSeeWalkers] = useState(false)
    const handleSeeWalkers = () => {
        setSeeWalkers(!seeWalkers)
    }
    return (
        <div className={"dog_divs"} key={dog.id}>
            <h2 className={"dog_name"}>{dog.name}</h2>
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