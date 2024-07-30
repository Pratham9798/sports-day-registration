import React from 'react';
import dayjs from 'dayjs';

const EventCard = ({ event, onSelect }) => (
  <div className="event-card">
    <h3>{event.event_name}</h3>
    <p>Category: {event.event_category}</p>
    <p>Time: {dayjs(event.start_time).format('HH:mm')} - {dayjs(event.end_time).format('HH:mm')}</p>
    <button onClick={() => onSelect(event)}>Select</button>
  </div>
);

export default EventCard;
