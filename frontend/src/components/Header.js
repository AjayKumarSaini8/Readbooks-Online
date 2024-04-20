import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-semibold">
                    BookClub
                </Link>

                {user ? (
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-blue-300 hover:underline'>
                            Hello, {user.username} ▼
                        </button>

                        {isOpen && (
                            <div className='mt-2 bg-white text-black p-2 rounded shadow'>
                                <Link to="/" className="block px-2 py-1 hover:bg-blue-500 hover:text-white">
                                    Home
                                </Link>
                                <Link to="/booklist" className="block px-2 py-1 hover:bg-blue-500 hover:text-white">
                                    Saved Books
                                </Link>
                                <button onClick={logoutUser} className="block w-full text-left px-2 py-1 hover:bg-blue-500 hover:text-white">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="text-blue-300 hover:underline">
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
