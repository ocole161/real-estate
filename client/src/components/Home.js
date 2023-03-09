import PropertyList from "./PropertyList";

function Home({ properties, user, onDeleteProperty, updateUser, handleNeighborhoodClick }) {

    return (
        <div>
            <h1>Michael El-Bitar | Your Denver Realtor</h1>
            <PropertyList properties={properties} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser} handleNeighborhoodClick={handleNeighborhoodClick} />
        </div>
    )
}

export default Home;