import {Navigate, useNavigate} from 'react-router-dom'

function PropertyCard({ property, user, onDeleteProperty }) {
    
    const { image_url, price, address, beds, baths, sqft, neighborhood } = property;
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

    function handleDeleteProperty() {
        if (window.confirm('Are you sure you want to delete this property?') === true) {
            fetch(`/properties/${property.id}`, {
                method: 'DELETE',
            })
            .then(onDeleteProperty(property));
        }
    }

    function navigateUpdate() {
        Navigate(`/properties/update/${property.id}`)
    }

    return (
        <div className="property-card">
            <img src={image_url} alt={address} className="card_image"/>
            <h1>{formatter.format(price)}</h1>
            <h2>{address}</h2>
            <h2>{neighborhood}</h2>
            <h3>Beds: {beds}</h3>
            <h3>Baths: {baths}</h3>
            <h3>Sqft: {sqft}</h3>
            <button>Favorite</button>
            {user?.is_admin ? <a href={`/properties/update/${property.id}`}><button>Update</button></a> : null}
            {user?.is_admin ? <button onClick={handleDeleteProperty}>Delete</button> : null}
        </div>
    );
}

export default PropertyCard;