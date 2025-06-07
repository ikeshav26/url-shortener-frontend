import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            to="/login"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-medium"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
