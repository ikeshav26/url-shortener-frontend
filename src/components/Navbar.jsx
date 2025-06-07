import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthProvider, {useAuth}  from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Navbar = () => {
  const {authuser, setauthuser} = useAuth();

  const logoutHandler = (e) => {
    localStorage.removeItem('user');
    setauthuser(null); // Clear auth state
    toast.success("Logout Successfully")

  }

  return (
    <div>
      <nav className="bg-blue-600 px-6 py-4 shadow flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          URL Shortener
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-white hover:text-blue-200 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/customUrl"
            className="text-white hover:text-blue-200 font-medium transition"
          >
            CustomUrl
          </Link>
          {authuser ? (
            <button
              onClick={logoutHandler}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-medium"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
