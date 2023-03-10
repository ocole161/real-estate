import Card from 'react-bootstrap/Card';

function MessageCard ({ message }) {

    return (
        <Card style={{margin:"5px"}}>
            <h2>User: {message.user.username} </h2>
            <h3>Message: {message.body}</h3>
            <p>Property: {message.property.address}</p>
            <p>Contact: {message.user.email} {message.user.phone}</p>
            <p>Sent on: {message.created_at.slice(0,10)}</p>
        </Card>
    )
}

export default MessageCard