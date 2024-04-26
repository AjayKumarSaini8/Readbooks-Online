import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const { registerUser } = useContext(AuthContext);
    console.log(email, username, password, password2);

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser(email, username, password, password2);
    };

    return (
        <>
            <section className="h-screen bg-[#9A658C]">
                <div className="container mx-auto h-full py-20 flex items-center justify-center">
                    <div className="w-full xl:w-1/2">
                        <div className="bg-white rounded-xl flex">
                            <div className="hidden md:flex md:w-1/2 lg:w-3/5">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form"
                                    className="w-full h-full object-cover rounded-l-xl"
                                />
                            </div>
                            <div className="md:w-1/2 lg:w-2/5 flex items-center p-8 lg:p-20 text-black">
                                <form onSubmit={handleSubmit} className="w-full">
                                    <div className="flex items-center mb-3 pb-1">
                                        <i
                                            className="fas fa-cubes text-2xl mr-3"
                                            style={{ color: "#ff6219" }}
                                        />
                                        <span className="text-2xl font-bold">
                                            Welcome to <b>Ajax👋</b>
                                        </span>
                                    </div>
                                    <h5
                                        className="font-normal mb-3 pb-3"
                                        style={{ letterSpacing: 1 }}
                                    >
                                        Sign Up
                                    </h5>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Email Address"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Username"
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            placeholder="Confirm Password"
                                            onChange={e => setPassword2(e.target.value)}
                                        />
                                    </div>
                                    <div className="pt-1 mb-4">
                                        <button
                                            className="btn btn-dark btn-lg btn-block"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    <a className="text-xs text-gray-500" href="#!">
                                        Forgot password?
                                    </a>
                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                        Already have an account?{" "}
                                        <Link to="/login" style={{ color: "#393f81" }}>
                                            Login Now
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

export default RegisterPage;
