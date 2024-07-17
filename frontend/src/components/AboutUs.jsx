import React from 'react';

const AboutUs = () => {
  const boardMembers = [
    {
      name: 'John Doe',
      designation: 'President',
      contact: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      designation: 'Vice President',
      contact: 'jane.smith@example.com',
    },
    {
      name: 'Alice Johnson',
      designation: 'Secretary',
      contact: 'alice.johnson@example.com',
    },
    {
      name: 'Bob Brown',
      designation: 'Treasurer',
      contact: 'bob.brown@example.com',
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-800">About Us</h1>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Welcome to the Coin Club! We are dedicated to coin collecting and numismatics. Our goal is to bring together enthusiasts and collectors to share knowledge and experiences about coin collecting.
          </p>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Board Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.designation}</p>
              <p className="text-gray-600">{member.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
