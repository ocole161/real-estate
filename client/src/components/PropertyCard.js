import { useState, useEffect } from "react";

function PropertyCard({ property, user, onDeleteProperty, updateUser }) {
    const { image_url, price, address, beds, baths, sqft, neighborhood } = property;
    const [errors, setErrors] = useState([]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

    const [favorite, setFavorite] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false);
    const [formData, setFormData] = useState({
        body: "",
        property_id: property.id,
        user_id: user?.id,
    });

    useEffect(() => {
        const favorite_check = (user?.properties?.filter((p) => p.id === property.id))
        if (favorite_check?.length > 0) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }
    },[user, property.id])

    function handleDeleteProperty() {
        if (window.confirm('Are you sure you want to delete this property?') === true) {
            fetch(`/properties/${property.id}`, {
                method: 'DELETE',
            })
            .then(onDeleteProperty(property));
        }
    }

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleMessageSubmit(e) {
        e.preventDefault()
        fetch("/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(
        setMessageOpen(false),
        window.alert("Message Sent!"))
    }

    function handleFavoriteClick(e) {
        e.preventDefault()
        const favorite = {
            property_id: property.id,
            user_id: user?.id,
        }
        fetch(`/favorite_properties`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorite)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(setFavorite(true))
            } else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    function handleUnfavoriteClick() {
        const unfavorite = (user?.favorite_properties.filter((f) => f.property_id === property.id))
        fetch(`/favorite_properties/${unfavorite[0].id}`,{
            method: "DELETE",
        })
        .then(res => {
            if(res.ok) {
                fetch(`/users/${user.id}`)
                .then(res => res.json())
                updateUser(user)
                console.log(user)
                setFavorite(false)
            } else {
                console.log(user)
                res.json().then(json => setErrors(json.error))
            }
        })
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
            {user? !favorite? 
            <button onClick={handleFavoriteClick}>Favorite</button> 
            : <button onClick={handleUnfavoriteClick}>Remove Favorite</button> : null}
            {messageOpen? 
            <form>
                <textarea 
                    id="body" 
                    name="body" 
                    rows="8" 
                    cols="50" 
                    type="text" 
                    placeholder="Send Message to Agent Regarding this Property" 
                    onChange={handleChange} /> 
                    <br></br>
                <input 
                    type="submit"
                    onClick={handleMessageSubmit} />
            </form> 
            : null }
            {user? <button onClick={() => setMessageOpen(!messageOpen)}>{messageOpen ? "Cancel" : "Send Message to Agent"}</button> : null}
            {user?.is_admin ? <a href={`/properties/update/${property.id}`}><button>Update</button></a> : null}
            {user?.is_admin ? <button onClick={handleDeleteProperty}>Delete</button> : null}
            {errors?<h2>{errors}</h2>:null}
        </div>
    );
}

export default PropertyCard;