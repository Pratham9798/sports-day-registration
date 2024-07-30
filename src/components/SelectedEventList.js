import React from 'react';
import dayjs from 'dayjs';

const SelectedEventList = ({ events, onDeselect }) => (
  <div className="selected-events">
    <h3>Selected Events</h3>
    {events.map(event => (
      <div key={event.id}>
        <span>{event.event_name} ({dayjs(event.start_time).format('HH:mm')} - {dayjs(event.end_time).format('HH:mm')})</span>
        <button onClick={() => onDeselect(event.id)}>Deselect</button>
      </div>
    ))}
  </div>
);

export default SelectedEventList;
