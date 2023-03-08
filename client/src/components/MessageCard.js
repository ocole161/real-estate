function MessageCard ({ message }) {

    return (
        <div className="message-card">
            <h2>User: {message.user.username} </h2>
            <p>{message.body}</p>
            <p>Contact: {message.user.email} {message.user.phone}</p>
        </div>
    )
}

export default MessageCard