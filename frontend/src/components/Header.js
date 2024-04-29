import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="BookClub Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            BookClub
                        </span>
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
            </nav >
        </>
    );
};

export default Header;
