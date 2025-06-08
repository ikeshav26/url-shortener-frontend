import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const RegisterPage = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { authuser, setauthuser } = useAuth();

    const navigate = useNavigate();
    const baseUrl=import.meta.env.VITE_BASE_URL;

    const submitHandler = async (e) => {
        e.preventDefault();
        const form = {
            name,
            email,
            password
        };

        try {
            if (!name || !email || !password) {
                toast.error("Please fill all fields");
            }
            else {
                const res = await axios.post(`${baseUrl}/auth/register`, form,{withCredentials:true});
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setauthuser(res.data.user)
                toast.success("Registration successful");
                navigate('/');

                setname("");
                setemail("");
                setpassword("");
            }
        } catch (err) {
            toast.error("Registration failed. Please check your details.");
            setname("");
            setemail("");
            setpassword("");
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
                {/* Cross button in top-right */}
                <Link
                    to="/"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                    title="Back to Home"
                >
                    &times;
                </Link>
                <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Register</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <input
                            value={name}
                            required
                            onChange={(e) => setname(e.target.value)}
                            name="name"
                            type="text"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            name="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            required
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                            name="password"
                            type="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span>Already have an account? </span>
                    <Link to="/login" className="text-blue-600 underline">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;