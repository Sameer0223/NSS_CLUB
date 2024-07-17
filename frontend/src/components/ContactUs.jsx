// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      link: 'https://www.facebook.com/yourclub',
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      link: 'https://www.twitter.com/yourclub',
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/yourclub',
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/yourclub',
    },
  ];

  const officials = [
    {
      name: 'John Doe',
      position: 'President',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      position: 'Vice President',
      email: 'jane.smith@example.com',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions, suggestions, or just want to say hello, feel free to contact us through the following channels. We would love to hear from you!
            </p>
            <div className="mb-8">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.link} className="flex items-center bg-blue-500 text-white rounded-lg p-4 mb-4 hover:bg-blue-700 transition duration-300">
                  <i className={`${link.icon} text-2xl mr-4`}></i>
                  {link.name}
                </a>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            {officials.map((official, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-700 font-semibold">{official.name}</p>
                <p className="text-gray-700">{official.position}</p>
                <p className="text-gray-700">{official.email}</p>
              </div>
            ))}
          </div>
          {/* Right side */}
          <div className="md:w-1/2 md:pl-6">
            <h3 className="text-2xl font-semibold mb-4">Feedback Form</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-700 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
