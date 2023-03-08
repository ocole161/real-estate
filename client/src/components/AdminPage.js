import MessageList from "./MessageList";
import FavoriteList from "./FavoriteList";


function AdminPage ({ messages, favorites }) {
    return (
        <div>
            <h1>Admin Page</h1>
            <a href='/properties/new'><button>Create New Property</button></a>
            <MessageList messages={messages} />
            <FavoriteList favorites={favorites}/>
        </div>
    )
}

export default AdminPage