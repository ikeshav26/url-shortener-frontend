import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'

const CustomUrl = () => {
  const [url, seturl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [shortened, setShortened] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = {
      url,
      customUrl
    }

    try {
      // Make sure you are logged in and your backend CORS is set up for credentials!
      const res = await axios.post(
        "http://localhost:5001/api/create/custom",
        form,
        { withCredentials: true }
      );
      setShortened(res.data); // Show the short URL
      toast.success("Custom short URL created!");
      seturl("");
      setCustomUrl("");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("Unauthorized. Please login first.");
      } else {
        toast.error(err.response?.data?.message || "Something went wrong");
      }
      console.error(err);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <form
          onSubmit={submitHandler}
          className="bg-white p-8 rounded shadow-md w-full max-w-md mt-8"
        >
          <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">Create Custom Short URL</h2>
          <div className="mb-4">
            <input
              value={url}
              onChange={(e) => seturl(e.target.value)}
              type="url"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Long URL"
              required
            />
          </div>
          <div className="mb-6">
            <input
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your custom short URL"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Create
          </button>
          {shortened && (
            <div className="mt-4 text-center">
              <span className="text-green-700">Short URL: </span>
              <a
                href={shortened}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {shortened}
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default CustomUrl