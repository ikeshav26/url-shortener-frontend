import React from 'react';
import Urlform from '../components/Urlform';
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h1 className="text-4xl font-bold mb-6 text-blue-700">URL Shortener</h1>
      <Urlform />
      </div>
      </div>
    </>
    
  );
};

export default Homepage;