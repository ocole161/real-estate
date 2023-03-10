import FavoriteCard from "./FavoriteCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function FavoriteList({ favorites }) {
    
    
    return ( 
    <>
    <h2>Recent Favorites by Users:</h2>
    <Container>
        <Row>
            {favorites?.map(favorite => <FavoriteCard key={favorite.id} address={favorite.property.address} user={favorite.user} created_at={favorite.created_at.slice(0,10)} />)}
        </Row>
    </Container>
    </>
    )
}

export default FavoriteList