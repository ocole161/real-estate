import { useParams } from "react-router";
import PropertyList from "./PropertyList";

function UserPage({ user }) {
    const params = useParams();
    // const { id } = params;

    return (
        <div>
            <h1>User Page</h1>
            <PropertyList properties={user?.properties} user={user} />
        </div>
    );
}

export default UserPage;