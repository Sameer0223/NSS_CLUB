import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-lg font-semibold mb-2">Follow us on</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/yourclub" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://twitter.com/yourclub" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/yourclub" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/yourclub" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a href="https://www.youtube.com/yourclub" className="text-red-600 hover:text-red-800 transition-colors duration-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
