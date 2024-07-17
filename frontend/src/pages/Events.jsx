import React from 'react';

const events = [
  { 
    id: 1, 
    description: 'NSS UNIT SNIST has administered over 1200+ vaccine doses.This achievement is a testament to the tireless efforts and commitment of our NSS volunteers in promoting public health and well-being. The successful implementation of this initiative is a step forward in ensuring a safer and healthier community. We will continue to work towards creating a better and healthier environment for everyone.', 
    image: './events/Vaccination.jpg' 
  },
  { 
    id: 2, 
    date: '2024-07-03', 
    time: '11:00 AM', 
    venue: 'Venue 2', 
    description: 'Every year, NSS Unit SNIST organises a cloth collection and donation drive to help the underprivileged. The cloth collection drive is not limited to the college premises; people from all over Hyderabad donate clothes to contribute to the well being of others.These clothes are then donated to the people who do not have these basic necessities.', 
    image: './events/Cloth.jpg' 
  },
  { 
    id: 3, 
    date: '2024-07-04', 
    time: '12:00 PM', 
    venue: 'Venue 3', 
    description: 'We the NSS volunteers have actively engaged in various clean-up drives, including lake and hill clean-ups, demonstrating a strong commitment to environmental conservation. These initiatives not only help restore natural beauty but also promote awareness about the importance of maintaining clean and healthy surroundings. Through these efforts, we aim to inspire others to take part in preserving our environment for future generations.', 
    image: './events/clearup.jpg' 
  },
  { 
    id: 4, 
    date: '2024-07-05', 
    time: '1:00 PM', 
    venue: 'Venue 4', 
    description: 'We the team NSS Unit SNIST started celebrating our culture and tradition through Bathukamma festival. Bathukamma is a vibrant floral festival celebrated predominantly in Telangana, India, marking the beauty and cultural richness of the region. It involves women creating and worshipping flower stacks, symbolizing life and prosperity, culminating in grand communal celebrations. Our festivities highlighted unity and prosperity, allowing us to connect deeply with local traditions.', 
    image: './events/food.jpg' 
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <section id="events" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Events and Activities</h2>
        {events.map((event, index) => (
          <div key={event.id} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-transform duration-500 ease-in-out transform hover:scale-105`}>
            <div className="w-full md:w-1/2">
              <div className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl  mb-4 text-justify" style={{textIndent: '2em',}}>{event.description}</h3>
                {/* Optional: Include date, time, and venue */}
                {/* <p className="text-gray-600">Date: {event.date}</p>
                <p className="text-gray-600">Time: {event.time}</p>
                <p className="text-gray-600">Venue: {event.venue}</p> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 ml-0 md:ml-8">
              <img
                src={event.image}
                alt={event.description} // Use event description as alt text
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
