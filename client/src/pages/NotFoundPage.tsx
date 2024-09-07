import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-8">Your visited page not found. You may go home page.</p>
      <button className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
        Back to home page
      </button>
    </div>
  );
};

export default NotFoundPage;
