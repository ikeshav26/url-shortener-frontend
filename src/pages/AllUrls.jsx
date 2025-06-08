import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'

const AllUrls = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  const baseUrl=import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    // Get user email from localStorage (if stored there after login)
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email) {
      setUserEmail(user.email);
    }

    const fetchUrls = async () => {
      try {
        const res = await axios.get(`${baseUrl}/create/all`, { withCredentials: true });
        setUrls(res.data);
      } catch (err) {
        toast.error('Failed to fetch URLs');
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hi @gmail.com outside the main box, bigger and bold */}
      {userEmail && (
        <div className="text-3xl font-extrabold text-blue-700 text-center mt-8 mb-2">
          Hi <span>{userEmail}</span>
        </div>
      )}
      <div className="max-w-2xl mx-auto mt-4 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Your Custom Shortened URLs</h2>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : urls.length === 0 ? (
          <div className="text-center text-gray-500">No URLs found.</div>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Short URL</th>
                <th className="px-4 py-2 text-left">Original URL</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url._id}>
                  <td className="px-4 py-2">
                    <a
                      href={url.short_url.startsWith('http') ? url.short_url : `http://localhost:5001/api/${url.short_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                    >
                      https://url-shortener-backend-95tw.onrender.com/api/{url.short_url}
                    </a>
                  </td>
                  <td className="px-4 py-2 break-all">{url.full_url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AllUrls