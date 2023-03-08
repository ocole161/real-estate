import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function CreateProperty ({ onCreateProperty }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        address: "",
        price: "",
        beds: "",
        baths: "",
        sqft: "",
        neighborhood: "",
        image_url: "",
    })

    const { address, price, beds, baths, sqft, neighborhood, image_url} = formData

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newProperty => {
            navigate("/admin");
            window.alert("Property added!")
        })
    }

    return (
        <div className="form">
            <h1>New Property:</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="address" name="address" placeholder="Address" value={address} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <input type="number" id="price" name="price" placeholder="Price" value={price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="number" id="beds" name="beds" placeholder="Beds" value={beds} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="number" id="baths" name="baths" placeholder="Baths" value={baths} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="number" id="sqft" name="sqft" placeholder="Square Footage" value={sqft} onChange={handleChange} />
                </div>
                <div className="form-group">
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
                    <input type="url" id="image_url" name="image_url" placeholder="Image URL" value={image_url} onChange={handleChange} />
                </div>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>

    )
}

export default CreateProperty