import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function CreateAccount({ updateUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phone: ""
    })
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const {username, password, email, phone} = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            email,
            phone,
            password
        }
        fetch(`/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    updateUser(user)
                    navigate("/")
                })
            } else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                Username
                </label>  
                <input 
                    type='text' 
                    name='username' 
                    value={username} 
                    onChange={handleChange}
                    required />
                <label>
                Email
                </label>
                <input 
                    type='text' 
                    name='email' 
                    value={email} 
                    onChange={handleChange} />
                <label>
                Phone Number
                </label>
                <input 
                    type='text' 
                    name='phone' 
                    value={phone} 
                    onChange={handleChange} />
                <label>
                Password
                </label>
                <input 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange}
                    required />
                
            
                <input type='submit' value='Sign up!' />
            </form>
            {errors?<h2>{errors}</h2>:null}
        </div>
    )
}

export default CreateAccount;