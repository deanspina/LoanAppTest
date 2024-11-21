import React from 'react';
    import { Link } from 'react-router-dom';

    function Home() {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Loan Application</h1>
            <Link to="/application" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Application
            </Link>
          </div>
        </div>
      );
    }

    export default Home;
