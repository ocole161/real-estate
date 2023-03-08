import {useNavigate} from 'react-router-dom'

function Navigation({updateUser, user}) {

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
            {user ? <a href={`/users/${user.id}`}>My Favorites </a> : null}
            {user?.is_admin ? <a href='/admin'>Admin </a> : null}
            <button onClick={handleLogout}>Logout</button>
            <p>Current User: {user ? user.username : "No User"}</p>
        </>
    )
}

export default Navigation;