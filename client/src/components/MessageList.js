import MessageCard from "./MessageCard";

function MessageList ({ messages, user }) {

    return (
        <>
        <div>MessageList</div>
        {messages?.map(message => <MessageCard key={message.id} message={message} user={user} />)}
        </>
    )
}

export default MessageList;