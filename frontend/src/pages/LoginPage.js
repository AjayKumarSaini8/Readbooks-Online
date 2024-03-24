import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" placeholder='Username' name='username' />
                <input type="password" placeholder='password' name='password' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage