import PropertyCard from "./PropertyCard"

function PropertyList ({ properties, user, onDeleteProperty }) {


    return (
        <>
        <div>PropertyCardList</div>
        {properties?.map(property => <PropertyCard key={property.id} property={property} user={user} onDeleteProperty={onDeleteProperty} />)}
        </>
    )
}

export default PropertyList