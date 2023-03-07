import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Auth({updateUser}) {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const {username, password} = formData;

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/login`, {
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
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Username
                    <br />
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={handleChange}
                        required />
                </label>
                <br />
                <label>
                    Password
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={handleChange}
                        required />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>
            <a href="/users/new">
                <button>Create Account</button>
            </a>
            {errors?<h2>{errors}</h2>:null}
        </>
    )
}

export default Auth;