import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
        <div className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        placeholder='Username (required)'
                        type='text' 
                        name='username' 
                        value={username} 
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <input 
                        placeholder='Email'
                        type='text' 
                        name='email' 
                        value={email} 
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input 
                        placeholder='Phone Number'
                        type='text' 
                        name='phone' 
                        value={phone} 
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input 
                        placeholder='Password (required)'
                        type='password' 
                        name='password' 
                        value={password} 
                        onChange={handleChange}
                        required /><br></br>
                </div>
                <Button type='submit' size="sm" className='small-button'>Sign up!</Button>
            </form>
            {errors?<h2>{errors}</h2>:null}
        </div>
    )
}

export default CreateAccount;