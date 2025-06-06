import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';



const Urlform = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setshortUrl] = useState("")
    const [error, seterror] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault();
        if (!url) {
            toast.error("Please enter a URL");
            seterror("Please enter a URL");
            return;
        }
        try {
            const data = await axios.post("http://localhost:5001/api/create", { url })
            setshortUrl(data.data);
            toast.success("Short URL created successfully!");
        } catch (err) {
            seterror(err.response ? err.response.data : "Network error");
            console.error("Error creating short URL:", err);
            toast.error("Failed to create short URL. Please try again.");
        }
    }

    const changeHandler = (e) => {
        setUrl(e.target.value)
    }

    return (
        <form onSubmit={submitHandler} className=" p-6 rounded shadow-md w-full max-w-md">
            <div className="mb-4">
                <input
                    value={url}
                    onChange={changeHandler}
                    type="url"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your URL"

                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Shorten URL
            </button>

            {error && (
                <div>
                    <div className="mt-4 text-red-600">Error:</div>
                    <div className="mt-2 text-red-500">{error}</div>
                </div>)}

            {url && (
                <div className="mt-4">
                    <span className="font-semibold">Short URL: </span>
                    <a href={shortUrl} className="text-blue-600 underline" >
                        {shortUrl}
                    </a>
                </div>
            )}
        </form>
    );
};

export default Urlform;