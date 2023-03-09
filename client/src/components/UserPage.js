import PropertyList from "./PropertyList";

function UserPage({ user }) {

    return (
        <div>
            <h1>Your Favorite Properties</h1>
            <PropertyList properties={user?.properties} user={user} />
        </div>
    );
}

export default UserPage;