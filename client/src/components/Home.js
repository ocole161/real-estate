import PropertyList from "./PropertyList";
import photo_img from "../assets/photo_img.jpg";

function Home({ properties, user, onDeleteProperty, updateUser, handleNeighborhoodClick }) {

    return (
        <div>
            <h1>Michael El-Bitar | Your Denver Realtor</h1>
            <img src={photo_img} alt="Michael El-Bitar" />
            <PropertyList properties={properties} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser} handleNeighborhoodClick={handleNeighborhoodClick} />
        </div>
    )
}

export default Home;