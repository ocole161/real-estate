import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


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
        .then(r => {
            if(r.ok) {
                r.json().then(
                setMessageOpen(false),
                window.alert("Message Sent!"))
            } else {
                r.json().then(json => setErrors(json.error))
            }
        })
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
        .then(r => {
            if(r.ok) {
                r.json().then(
                setFavorite(true))
            } else {
                r.json().then(json => setErrors(json.error))
            }
        })
    }

    function handleUnfavoriteClick() {
        const unfavorite = (user?.favorite_properties.filter((f) => f.property_id === property.id))
        fetch(`/favorite_properties/${unfavorite[0]?.id}`,{
            method: "DELETE",
        })
        .then(res => {
            if(res.ok) {
                setFavorite(false)
            } else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    return (
        <Col >
            <Card className="card">
                <Card.Img variant="top" rounded="true" src={image_url} alt={address} className="card_image"/>
                <Card.Body>
                    <Card.Title>{address}</Card.Title>
                    <Card.Title>{formatter.format(price)}</Card.Title>
                    <Card.Text>{neighborhood}</Card.Text>
                    <Card.Text>{beds} beds, {baths} baths, {sqft} Square Feet</Card.Text>
                    {messageOpen? 
                    <form>
                        <textarea 
                            id="body" 
                            name="body" 
                            rows="8" 
                            cols="32" 
                            type="text" 
                            placeholder="Send Message to Agent Regarding this Property" 
                            onChange={handleChange} /> 
                            <br></br>
                        <Button className="small-button" type="submit" size="md" onClick={handleMessageSubmit}>Submit Message</Button>
                    </form> 
                    : null }
                    {user? <Button className="small-button" size="sm" onClick={() => setMessageOpen(!messageOpen)}>{messageOpen ? "Cancel" : "Send Message to Agent"}</Button> : null}
                    {user?.is_admin ? <br></br> : null}
                    {user?.is_admin ? <a href={`/properties/update/${property.id}`}><Button className="small-button" size="sm">Update</Button></a> : null}
                    {user?.is_admin ? <Button className="small-button" size="sm" onClick={handleDeleteProperty}>Delete</Button> : null}
                    <br></br>
                    {user? !favorite? 
                    <Button className="small-button" size="md" onClick={handleFavoriteClick}>🖤</Button> 
                    : <Button className="small-button" size="md" onClick={handleUnfavoriteClick}>💖</Button> : null}
                    {errors?<h2>{errors}</h2>:null}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PropertyCard;