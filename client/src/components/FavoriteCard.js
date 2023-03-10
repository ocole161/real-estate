import Card from 'react-bootstrap/Card';

function FavoriteCard( {address, user, created_at}) {
    return (
        <Card style={{margin:"5px"}}>
            <h5>{user.username} liked the property at {address}</h5>
            <p>On {created_at}</p>
            <p>Contact: {user.email} {user.phone}</p>
        </Card>
    )
}

export default FavoriteCard;