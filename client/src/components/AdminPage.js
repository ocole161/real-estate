import MessageList from "./MessageList";
import FavoriteList from "./FavoriteList";


function AdminPage ({ messages }) {
    return (
        <div>
            <h1>Admin Page</h1>
            <MessageList messages={messages} />
            <FavoriteList />
        </div>
    )
}

export default AdminPage