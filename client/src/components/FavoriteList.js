import FavoriteCard from "./FavoriteCard"

function FavoriteList({ favorites }) {
    
    
    return ( <>
    <h2>FavoriteList</h2>
    {favorites?.map(favorite => <FavoriteCard key={favorite.id} address={favorite.property.address} user={favorite.user.username} created_at={favorite.created_at.slice(0,10)} />)}
    </>
    )
}

export default FavoriteList