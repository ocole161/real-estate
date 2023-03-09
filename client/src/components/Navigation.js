import {useNavigate} from 'react-router-dom'

function Navigation({ updateUser, user }) {

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
            <a href="/"><button>Home</button> </a>
            <a href="/login"><button>Login</button> </a>
            <a href='/users/new'><button>Sign Up</button> </a>
            {user ? <a href={`/users/${user.id}`}><button>My Favorites</button> </a> : null}
            {user?.is_admin ? <a href='/admin'><button>Admin</button> </a> : null}
            {user ? <button onClick={handleLogout}>Logout</button> : null}
            <p>Current User: {user ? user.username : "No User"}</p>
        </>
    )
}

export default Navigation;