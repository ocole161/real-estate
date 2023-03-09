import MessageList from "./MessageList";
import FavoriteList from "./FavoriteList";
import { useState } from "react";

function AdminPage ({ messages, favorites }) {
    const [show, setShow] = useState("showMessages");
    return (
        <div>
            <h1>Admin Page</h1>
            <a href='/properties/new'><button>Create New Property</button></a><br></br>
            {(show === "showFavorites") ? 
            <button onClick={() => setShow("showMessages")}>Show Messages</button> :
            <button onClick={() => setShow("showFavorites")}>Show Favorites</button> }
            {(show === "showMessages") ? <MessageList messages={messages}  /> : null }
            {(show === "showFavorites") ? <FavoriteList favorites={favorites}/> : null }
        </div>
    )
}

export default AdminPage