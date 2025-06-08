import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  toast  from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

const Loginpage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {authuser, setauthuser} = useAuth()// Assuming you have a context or state management for auth

  const baseUrl=import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const form = {
      email,
      password
    }

    try {
      const res = await axios.post(`${baseUrl}/auth/login`, form,{withCredentials:true})
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setauthuser(res.data.user)
        setemail("");
        setpassword("");

        navigate('/');
         toast.success("Login successful");
      }
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      setemail("")
      setpassword("")
      
      console.error(err);
    }
  }

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
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Login</h2>
        <form onSubmit={submitHandler}>
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
              value={password}
              onChange={(e) => setpassword(e.target.value)}
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link to="/register" className="text-blue-600 underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;