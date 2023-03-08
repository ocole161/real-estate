import MessageCard from "./MessageCard";

function MessageList ({ messages, user }) {

    return (
        <>
        <h2>MessageList</h2>
        {messages?.map(message => <MessageCard key={message.id} message={message} user={user} />)}
        </>
    )
}

export default MessageList;