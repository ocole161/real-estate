import {useNavigate} from 'react-router-dom'

function Navigation({updateUser}) {

    const navigate = useNavigate();

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
            })
            .then(res => {
                if (res.ok) {
                    updateUser(null)
                    navigate("/");
                }
            })
    }

    return (
        <>
            <a href="/">Home </a>
            <a href="/login">Login </a>
            <a href='/users/new'>Sign Up </a>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Navigation;