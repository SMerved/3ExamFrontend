import React from 'react';

function OwnerDetails({newOwner, setNewOwner}) {

    const onChangeOwner = (evt) => {
        const id = evt.target.id.substring(6)
        setNewOwner({...newOwner, [id]: evt.target.value})
    }
    return (
        <div className={"create_dog_details"}>
            <h3 className={"owner_details"}>Owner details </h3>
            <label htmlFor={"owner_name"} className={"create_dog_label"}>Name: </label>
            <input id={"owner_name"} className={"create_dog_input"} value={newOwner.name} onChange={onChangeOwner} required/>
            <label htmlFor={"owner_address"} className={"create_dog_label"}>Address: </label>
            <input id={"owner_address"} className={"create_dog_input"} value={newOwner.address} onChange={onChangeOwner} required/>
            <label htmlFor={"owner_phone"} className={"create_dog_label"}>Phone number: </label>
            <input id={"owner_phone"} className={"create_dog_input"} value={newOwner.phone} onChange={onChangeOwner} required/>
        </div>
    );
}

export default OwnerDetails;