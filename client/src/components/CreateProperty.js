import { useState } from "react"

function CreateProperty () {

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



    return (
        <>CreateProperty</>
    )
}

export default CreateProperty