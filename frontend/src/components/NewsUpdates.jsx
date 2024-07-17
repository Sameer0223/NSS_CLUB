// src/components/NewsUpdates.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import './NewsUpdates.css';

const newsData = [
  {
    title: 'Festive and Health Celebrations ',
    date: 'July 10, 2024',
    description: 'The NSS Unit recently organized a Holi celebration at an orphanage, bringing joy to the children with eco-friendly colors and fun activities. Additionally, Yoga Day celebrations promoted health and wellness through yoga sessions, emphasizing the benefits of regular yoga practice.',
    image: './events/Bathukamma.jpg',
    link: '#'
  },
  {
    title: 'Anti-Drug Awareness',
    date: 'July 15, 2024',
    description: 'In collaboration with the Rachakonda Police, the NSS Unit participated in an anti-drug awareness program, educating the community about the dangers of drug abuse and promoting a drug-free lifestyle.',
    image: './events/drug.jpg',
    link: '#'
  },
  {
    title: 'Agricultural Engagement',
    date: 'July 20, 2024',
    description: 'Details aboVolunteers have been partnering with local farms, assisting in planting, weeding, and harvesting crops. This activity promotes environmental awareness, teamwork, and provides fresh produce for the community.ut event 3. This can be a brief summary or highlight of the event.',
    image: './events/agr.jpg',
    link: '#'
  }
];

const NewsUpdates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleOpenModal = (news) => {
    setSelectedContent(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
              <img className="w-full h-48 object-cover" src={news.image} alt={news.title} />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.date}</p>
                <p className="text-gray-700 mb-4">{news.description}</p>
                <button
                  onClick={() => handleOpenModal(news)}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedContent && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={selectedContent} />
      )}
    </div>
  );
};

export default NewsUpdates;
