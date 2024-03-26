import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-semibold">
                    BookClub
                </Link>

                <div>
                    {user && <p className="mr-4">Hello, {user.username}</p>}
                </div>
                <div>
                    {user ? (
                        <Link
                            onClick={logoutUser}
                            to="/logout"
                            className="text-blue-300 hover:underline"
                        >
                            Logout
                        </Link>

                    ) : (
                        <Link to="/login" className="text-blue-300 hover:underline">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
