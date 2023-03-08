function FavoriteCard( {address, user, created_at}) {
    return (
        <div className="favorite-card">
            <h2>{user} liked the property at {address} on {created_at}</h2>
        </div>
    )
}

export default FavoriteCard;