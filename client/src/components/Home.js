import PropertyList from "./PropertyList";
import photo_img from "../assets/photo_img.jpg";
import review_img from "../assets/review_img.jpg";
import review_img2 from "../assets/review_img2.jpg";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

function Home({ properties, user, onDeleteProperty, updateUser, handleNeighborhoodClick }) {

    return (
        <Container>
            <h1 className="title">Michael El-Bitar | Your Denver Realtor</h1>
            <div style={{display: "flex"}}>
            <Image fluid roundedCircle="true" style={{height:"500px", margin:"20px"}} src={photo_img} alt="Michael El-Bitar" />
            <Image fluid rounded="true" src={review_img} alt="review1" style={{height:"500px", margin:"20px"}} />
            <Image fluid rounded="true" src={review_img2} alt="review2" style={{height:"500px", margin:"20px"}} />
            </div>
            <PropertyList properties={properties} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser} handleNeighborhoodClick={handleNeighborhoodClick} />
        </Container>
    )
}

export default Home;