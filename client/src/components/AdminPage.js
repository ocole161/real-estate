import MessageList from "./MessageList";
import FavoriteList from "./FavoriteList";
import { useState } from "react";
import Button from 'react-bootstrap/Button'

function AdminPage ({ messages, favorites }) {
    const [show, setShow] = useState("showMessages");
    return (
        <div>
            <h1>Admin Page</h1>
            <a href='/properties/new'><Button style={{margin:"10px"}} size="md">Create New Property</Button></a><br></br>
            {(show === "showFavorites") ? 
            <Button style={{margin:"10px"}} size="md" onClick={() => setShow("showMessages")}>Show Messages</Button> :
            <Button style={{margin:"10px"}} size="md" onClick={() => setShow("showFavorites")}>Show Favorites</Button> }
            {(show === "showMessages") ? <MessageList messages={messages}  /> : null }
            {(show === "showFavorites") ? <FavoriteList favorites={favorites}/> : null }
        </div>
    )
}

export default AdminPage