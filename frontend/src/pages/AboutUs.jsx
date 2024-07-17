import React from 'react';
import Footer from '../components/Footer'; // Import your Footer component here

const AboutUs = () => {
  const boardMembers = [
    {
      name: 'John Doe',
      designation: 'President',
      contact: 'john.doe@example.com',
      image: '/path/to/john-doe-image.jpg',
      level: 1,
    },
    {
      name: 'Jane Smith',
      designation: 'Vice President',
      contact: 'jane.smith@example.com',
      image: '/path/to/jane-smith-image.jpg',
      level: 2,
    },
    {
      name: 'Alice Johnson',
      designation: 'Secretary',
      contact: 'alice.johnson@example.com',
      image: '/path/to/alice-johnson-image.jpg',
      level: 3,
    },
    {
      name: 'Bob Brown',
      designation: 'Treasurer',
      contact: 'bob.brown@example.com',
      image: '/path/to/bob-brown-image.jpg',
      level: 3,
    },
  ];

  return (
    <>
      <section id="about" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-center mb-8">About Us</h1>
          <div className="text-center mb-12">
            <p className="text-black text-justify">
              <b>
                &emsp;National Service Scheme is an initiative taken by the Indian government to engage students in nation-building activities. The program was launched in 1969 with the primary objective of developing the personality and character of the youth through voluntary community service. ‘Education through Service’ is the purpose of the NSS. The ideological orientation of the NSS is inspired by the ideals of Mahatma Gandhi. NSS has been a major part of the Indian education system. It encourages students to take part in social service activities.
              </b>
              <br /><br />
              <b>
                &emsp;The main objectives of the NSS are to promote national integration, social justice, and communal harmony among students. It also provides opportunities for students to develop their leadership skills and gain practical experience in social work. The NSS also helps students understand the importance of community service and the need for social responsibility.
              </b>
              <br /><br />
              <b>
                &emsp;Here in NSS Unit SNIST, the volunteers organise various events for the well-being of the underprivileged people, to help them lead a better life. Around 200 Volunteers are a part of this unit. A wide range of activities are conducted in order to help people in all the ways that are possible. Even during COVID, when everything came to a halt, NSS Unit SNIST continued to serve people. Online sessions were held to help students in staying mentally and physically healthy. When things returned to normal, NSS came up with an initiative called Aarambh, a successful three-day event comprising various camps.
              </b>
            </p>
          </div>
          {/* <h2 className="text-3xl font-bold text-center mb-8">Board Members</h2>
          <div className="space-y-12">
            {[1, 2, 3].map(level => (
              <div key={level} className="mb-8">
                <div className="flex flex-wrap gap-8 items-start">
                  {boardMembers
                    .filter(member => member.level === level)
                    .map((member, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-4 w-64">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                        <p className="text-gray-700 mb-2">{member.designation}</p>
                        <p className="text-gray-700">{member.contact}</p>
                      </div>
                    ))}
                </div>
                {level < 3 && <hr className="my-8 border-gray-400" />}
              </div>
            ))}
          </div> */}
          <div className="flex justify-center mt-12">
            <img
              src="./events/group.jpg"
              alt="Description of image"
              className="w-full max-w-4xl rounded-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
