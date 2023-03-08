function MessageCard ({ message }) {

    return (
        <div className="message-card">
            <h2>{message.user.username}: </h2>
            <p>{message.body}</p>
        </div>
    )
}

export default MessageCard