// src/components/Events.jsx
import React, { useState } from 'react';
import EventCard from './EventCard';
import Modal from './Modal';
import './Events.css';

const Events = () => {
  const [events] = useState([
    { id: 1, date: '2024-07-02', time: '10:00 AM', venue: 'Venue 1', description: 'Vaccination Drive ', image: './events/Vaccination.jpg' },
    { id: 2, date: '2024-07-03', time: '11:00 AM', venue: 'Venue 2', description: 'Cloth Collection & Donation', image: './events/Cloth.jpg' },
    { id: 3, date: '2024-07-04', time: '12:00 PM', venue: 'Venue 3', description: 'Aarambh', image: './events/Arambh.jpg' },
    { id: 4, date: '2024-07-05', time: '01:00 PM', venue: 'Venue 4', description: 'Aksharmaala', image: './events/Aksharmaala.jpg' },
    { id: 5, date: '2024-07-06', time: '02:00 PM', venue: 'Venue 5', description: 'CleanUp Drives', image: './events/clearup-drive.jpg' },
    { id: 6, date: '2024-07-07', time: '03:00 PM', venue: 'Venue 6', description: ' Bathukamma', image: './events/Bathukamma.jpg' },
  ]);

  const [visibleCount, setVisibleCount] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleViewLess = () => {
    setVisibleCount(3);
  };

  const handleOpenModal = (content) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Events and Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, visibleCount).map((event) => (
          <EventCard key={event.id} event={event} onOpenModal={handleOpenModal} />
        ))}
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        {visibleCount < events.length && (
          <button
            onClick={handleViewMore}
            className="view-button view-more-button"
          >
            View More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={handleViewLess}
            className="view-button view-less-button"
          >
            View Less
          </button>
        )}
      </div>
      {selectedContent && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={selectedContent} />
      )}
    </div>
  );
};

export default Events;
