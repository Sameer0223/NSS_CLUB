// src/components/JoinUs.jsx
import React from 'react';

const JoinUs = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Join Coin Club</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <img 
              src="/path/to/coin-club-image.jpg" 
              alt="Coin Club" 
              className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Coin Club</h3>
              <p className="text-gray-700 mb-4">
                The Coin Club is dedicated to coin collecting and numismatics. We aim to bring together enthusiasts and collectors to share knowledge and experiences about coin collecting. Join us to explore the fascinating world of coins!
              </p>
              <p className="text-gray-700 mb-4">
                Our club organizes regular meetings, exhibitions, and workshops where members can showcase their collections, learn from experts, and participate in exciting activities. Whether you are a seasoned collector or a beginner, the Coin Club has something for everyone.
              </p>
              <a 
                href="https://www.example.com/register-coin-club" 
                className="block bg-blue-500 text-white text-center rounded-lg p-4 hover:bg-blue-700 transition duration-300"
              >
                Register for Coin Club Membership
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
