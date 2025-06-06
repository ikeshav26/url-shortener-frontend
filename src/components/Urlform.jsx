import React, { useState } from 'react';

const Urlform = () => {
 
  return (
    <form  className=" p-6 rounded shadow-md w-full max-w-md">
      <div className="mb-4">
        <input
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
      {/*{error && <div className="text-red-500 mt-3">{error}</div>}
      {shortUrl && (
        <div className="mt-4">
          <span className="font-semibold">Short URL: </span>
          <a href={shortUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}*/}
    </form>
  );
};

export default Urlform;