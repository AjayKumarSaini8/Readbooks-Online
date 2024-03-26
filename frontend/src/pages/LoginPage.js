import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Log In</h1>
                    <p className="text-gray-600">Welcome back! Please sign in.</p>
                </div>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </a>
                </div>
            </div>
            <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 bg-cover bg-center bg-login-image" />
        </div>
    );
};

export default LoginPage;
