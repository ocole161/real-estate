function FavoriteCard( {address, user, created_at}) {
    return (
        <div className="favorite-card">
            <h3>{user.username} liked the property at {address} on {created_at}</h3>
            <p>Contact: {user.email} {user.phone}</p>
        </div>
    )
}

export default FavoriteCard;