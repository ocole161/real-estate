import PropertyList from "./PropertyList";

function Home({properties, user, onDeleteProperty}) {

    return (
        <div>
            <h1>Home</h1>
            <PropertyList properties={properties} user={user} onDeleteProperty={onDeleteProperty}/>
        </div>
    )
}

export default Home;