import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
    const { name } = useContext(AuthContext)
    return (
        <div>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/login'>Login</Link>

            <p>Hello {name}</p>
        </div>
    )
}

export default Header
