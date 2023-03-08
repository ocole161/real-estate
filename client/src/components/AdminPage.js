import MessageList from "./MessageList";
import FavoriteCard from "./FavoriteCard"

function AdminPage ({ messages }) {
    return (
        <div>
            <h1>Admin Page</h1>
            <MessageList messages={messages} />
            <FavoriteCard />
        </div>
    )
}

export default AdminPage