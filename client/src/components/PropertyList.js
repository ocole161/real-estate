import PropertyCard from "./PropertyCard"
import { useState } from "react"

function PropertyList ({ properties, user, onDeleteProperty, updateUser }) {
    const [neighborhood, setNeighborhood] = useState("All")

    const propertiesToShow = properties.filter(property => property.neighborhood === neighborhood)

    function handleNeighborhoodClick (e) {
        setNeighborhood(e.target.value)
    }

    return (
        <>
            <br></br>
            <label className="largeLabel">Neighborhood: </label>
            <button onClick={handleNeighborhoodClick} value="All">All</button>
            <button onClick={handleNeighborhoodClick} value="LoDo">LoDo</button>
            <button onClick={handleNeighborhoodClick} value="LoHi">LoHi</button>
            <button onClick={handleNeighborhoodClick} value="RiNo">RiNo</button>
            <button onClick={handleNeighborhoodClick} value="Sunnyside">Sunnyside</button>
            <button onClick={handleNeighborhoodClick} value="Berkely">Berkely</button>
            <button onClick={handleNeighborhoodClick} value="Five Points">Five Points</button>
            <button onClick={handleNeighborhoodClick} value="Jefferson Park">Jefferson Park</button>
            <br></br>
        {neighborhood === "All" ? properties?.map(property => <PropertyCard key={property.id} property={property} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser}/>)
        : propertiesToShow?.map(property => <PropertyCard key={property.id} property={property} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser}/>)}
        </>
    )
}

export default PropertyList