import MessageList from "./MessageList";
import FavoriteList from "./FavoriteList";


function AdminPage ({ messages, favorites }) {
    return (
        <div>
            <h1>Admin Page</h1>
            <button>Create New Property</button>
            <MessageList messages={messages} />
            <FavoriteList favorites={favorites}/>
        </div>
    )
}

export default AdminPage