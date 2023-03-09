import { useState } from "react";

function PropertyCard({ property, user, onDeleteProperty }) {
    
    const { image_url, price, address, beds, baths, sqft, neighborhood } = property;
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

    const [messageOpen, setMessageOpen] = useState(false);
    const [formData, setFormData] = useState({
        body: "",
        property_id: property.id,
        user_id: user.id,
    });

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
            </form>: null }
            <button onClick={() => setMessageOpen(!messageOpen)}>{messageOpen ? "Cancel" : "Send Message to Agent"}</button>
            {user?.is_admin ? <a href={`/properties/update/${property.id}`}><button>Update</button></a> : null}
            {user?.is_admin ? <button onClick={handleDeleteProperty}>Delete</button> : null}
        </div>
    );
}

export default PropertyCard;