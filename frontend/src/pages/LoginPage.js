import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginUser(email, password)

        console.log(email);
        console.log(password);
    }

    return (
        <>
            <section className="h-screen bg-[#9A616D]">
                <div className="container mx-auto h-full py-20 flex items-center justify-center">
                    <div className="w-full md:w-3/4 xl:w-1/2">
                        <div className="bg-white rounded-xl flex flex-col md:flex-row">
                            <div className="hidden md:flex md:w-1/2 lg:w-3/5">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form"
                                    className="w-full h-full object-cover rounded-l-xl"
                                />
                            </div>
                            <div className="w-full md:w-1/2 lg:w-2/5 flex items-center p-8 lg:p-20 text-black">
                                <form onSubmit={handleSubmit} className="w-full ">
                                    <div className="flex items-center mb-3 pb-1">
                                        <i
                                            className="fas fa-cubes text-2xl mr-3"
                                            style={{ color: "#ff6219" }}
                                        />
                                        <span className="text-2xl font-bold">Welcome back 👋</span>
                                    </div>
                                    <h5
                                        className="font-normal mb-3 pb-3"
                                        style={{ letterSpacing: 1 }}
                                    >
                                        Sign into your account
                                    </h5>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            id="form2Example17"
                                            className="form-control form-control-lg"
                                            name='email'
                                        />
                                        <label className="form-label" htmlFor="form2Example17">
                                            Email address
                                        </label>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            id="form2Example27"
                                            className="form-control form-control-lg"
                                            name='password'
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            Password
                                        </label>
                                    </div>
                                    <div className="pt-1 mb-4">
                                        <button
                                            className="btn btn-dark btn-lg btn-block"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <a className="text-xs text-gray-500" href="#!">
                                        Forgot password?
                                    </a>
                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                        Don't have an account?{" "}
                                        <Link to="/register" style={{ color: "#393f81" }}>
                                            Register Now
                                        </Link>
                                    </p>
                                    <a href="#!" className="text-xs text-gray-500">
                                        Terms of use.
                                    </a>
                                    <a href="#!" className="text-xs text-gray-500">
                                        Privacy policy
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default LoginPage;
