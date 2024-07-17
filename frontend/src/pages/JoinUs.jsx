import React from 'react';
import Footer from '../components/Footer'; // Import your Footer component here

const JoinUs = () => {
  return (
    <>
      <div className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Join NSS Club</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <img 
                src="./events/nss.jpg" 
                alt="NSS Club" 
                className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4">About NSS Club</h3>
                <p className="text-gray-700 mb-4 text-justify">
                National Service Scheme is an initiative taken by the Indian government to engage students in nation building activities. The program was launched in 1969 with the primary objective of developing the personality and character of the youth through voluntary community service. ‘Education through Service’ is the purpose of the NSS. The ideological orientation of the NSS is inspired by the ideals of Mahatma Gandhi. NSS has been a major part of the Indian education system. It encourages students to take part in social service activities.
                </p>
                
                <a 
                  href="https://www.example.com/register-NSS-club" 
                  className="inline-block bg-blue-500 text-white text-center rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300 text-sm"
                >
                  Register for NSS Club Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinUs;
