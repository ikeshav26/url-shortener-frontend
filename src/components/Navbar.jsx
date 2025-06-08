import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthProvider, { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Navbar = () => {
  const { authuser, setauthuser } = useAuth();
  const navigate = useNavigate()

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
          {authuser && (
            <Link to='/allUrls'>
              <div className="flex items-center gap-2">
                {/* Profile Icon */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
                    />
                    <circle cx="12" cy="11" r="4" />
                  </svg>
                </div>
                <button
                  onClick={() => {
                    logoutHandler();
                    navigate('/');
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-medium"
                >
                  Logout
                </button>
              </div>
            </Link>
          )}
          {!authuser && (
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