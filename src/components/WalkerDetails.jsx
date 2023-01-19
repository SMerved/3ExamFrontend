import React from 'react';

function WalkerDetails({newWalker, setNewWalker, newWalkers, setNewWalkers}) {

    const onChangeWalker = (evt) => {
        const id = evt.target.id.substring(7)
        setNewWalker({...newWalker, [id]: evt.target.value})
    }
    const addWalker = (evt) => {
        evt.preventDefault()
        setNewWalkers([...newWalkers, newWalker])
    }
    return (
        <div style={{padding: "2rem"}}>
            <form className={"create_dog_details"}>
                <h3 className={"owner_details"}>Walker(s) details </h3>
                <label htmlFor={"walker_name"} className={"create_dog_label"}>Name: </label>
                <input id={"walker_name"} className={"create_dog_input"} value={newWalker.name} onChange={onChangeWalker} required/>
                <label htmlFor={"walker_address"} className={"create_dog_label"}>Address: </label>
                <input id={"walker_address"} className={"create_dog_input"} value={newWalker.address} onChange={onChangeWalker} required/>
                <label htmlFor={"walker_phone"} className={"create_dog_label"}>Phone number: </label>
                <input id={"walker_phone"} className={"create_dog_input"} value={newWalker.phone} onChange={onChangeWalker} required/>
                <button className={"create_dog_walker_button"} type={"submit"} onClick={addWalker}>Add Walker</button>
            </form>
        </div>
    );
}

export default WalkerDetails;