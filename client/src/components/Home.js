import PropertyList from "./PropertyList";

function Home({properties, user}) {

    return (
        <div>
            <h1>Home</h1>
            <PropertyList properties={properties} user={user} />
        </div>
    )
}

export default Home;