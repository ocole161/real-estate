import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function UpdateProperty({ onUpdateProperty }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        address: "",
        price: "",
        beds: "",
        baths: "",
        sqft: "",
        neighborhood: "",
        image_url: "",
    })

    useEffect(() => {
        fetch(`/properties/${id}`)
        .then((r) => r.json())
        .then((property) => {
            setFormData(property)
        })
    },[id])

    const { address, price, beds, baths, sqft, neighborhood, image_url} = formData

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/properties/${id}`, {
            method: "PATCH",
            headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({...formData}),
        })
        .then((res) => res.json())
        .then((udpatedProperty) => {
            onUpdateProperty(udpatedProperty)
            navigate(`/`)
            window.alert("Property Updated!")
        })
    }

    return (
        <div className="form">
            <h1>Update Property:</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Address: </label>
                    <input type="text" id="address" name="address" placeholder="Address" value={address} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="number" id="price" name="price" placeholder="Price" value={price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Beds: </label>
                    <input type="number" id="beds" name="beds" placeholder="Beds" value={beds} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Baths: </label>
                    <input type="number" id="baths" name="baths" placeholder="Baths" value={baths} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Square Footage: </label>
                    <input type="number" id="sqft" name="sqft" placeholder="Square Footage" value={sqft} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Neighborhood: </label>
                    <select id="neighborhood" name="neighborhood" value={neighborhood} onChange={handleChange}>
                        <option>Select Neighborhood</option>
                        <option value="LoDo">LoDo</option>
                        <option value="LoHi">LoHi</option>
                        <option value="RiNo">RiNo</option>
                        <option value="Sunnyside">Sunnyside</option>
                        <option value="Berkeley">Berkeley</option>
                        <option value="Five Points">Five Points</option>
                        <option value="Jefferson Park">Jefferson Park</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Image URL: </label>
                    <input type="url" id="image_url" name="image_url" placeholder="Image URL" value={image_url} onChange={handleChange} />
                </div>
                <Button type="submit" className="small-button" size="sm" >Update</Button>
            </form>
            {/* {errors?<h2>{errors}</h2>:null} */}
        </div>
    )
}

export default UpdateProperty;