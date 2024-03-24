import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)
    return (
        <div>
            <Link to='/'>Home</Link>
            <span> | </span>
            {user ? (
                <Link onClick={logoutUser} to='/logout'>Logout</Link>
            ) : (
                <Link to='/login'>Login</Link>
            )}

            {user && <p>Hello {user.username}</p>}
        </div>
    )
}

export default Header
