// src/components/EventCard.jsx
import React from 'react';
import './Events.css';

const EventCard = ({ event, onOpenModal }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.description} className="event-image" />
      <div className="event-card-content">
        <h3 className="event-card-title">{event.description}</h3>
        <p className="event-card-details">Date: {event.date}</p>
        <p className="event-card-details">Time: {event.time}</p>
        <p className="event-card-details">Venue: {event.venue}</p>
        <div className="event-card-buttons">
          <button className="button" onClick={() => onOpenModal(event)}>Know More</button>
          <button className="button bg-green-500 hover:bg-green-600">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
