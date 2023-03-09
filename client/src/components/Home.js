import PropertyList from "./PropertyList";

function Home({properties, user, onDeleteProperty, updateUser }) {

    return (
        <div>
            <h1>Home</h1>
            <PropertyList properties={properties} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser} />
        </div>
    )
}

export default Home;