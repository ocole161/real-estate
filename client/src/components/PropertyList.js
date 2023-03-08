import PropertyCard from "./PropertyCard"

function PropertyList ({ properties, user }) {
    
    return (
        <>
        <div>PropertyCardList</div>
        {properties?.map(property => <PropertyCard key={property.id} property={property} user={user} />)}
        </>
    )
}

export default PropertyList