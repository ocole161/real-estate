import MessageCard from "./MessageCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MessageList ({ messages, user }) {

    return (

        <div style={{margin:"20px"}}>
            <h2>Messages from Users:</h2>
            <Container>
                <Row>
                    {messages?.map(message => <MessageCard key={message.id} message={message} user={user} />)}
                </Row>
            </Container>
        </div>
    )
}

export default MessageList;