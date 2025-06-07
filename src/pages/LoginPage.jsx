import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Loginpage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate=useNavigate();;
  const submitHandler=async(e)=>{
    e.preventDefault();
    const form={
      email,
      password
    }
    
    try{
      const res=await axios.post("http://localhost:5001/api/auth/login",form)
    if(res.status===200){
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success("Login successful");
      navigate('/');
    }

    }catch(err){
      console.error(err);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <input
            value={email}
            onChange={(e)=>setemail(e.target.value)}
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <input
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
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
          {/*{error && <div className="mt-4 text-red-600 text-center">{error}</div>}
          {success && <div className="mt-4 text-green-600 text-center">{success}</div>}*/}
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