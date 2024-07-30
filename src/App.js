import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import EventCard from './components/EventCard';
import SelectedEventList from './components/SelectedEventList';
import './App.css';

// Mock data
const mockEvents = [
  { id: 1, event_name: "Butterfly 100M", event_category: "Swimming", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 2, event_name: "Backstroke 100M", event_category: "Swimming", start_time: "2022-12-17 13:30:00", end_time: "2022-12-17 14:30:00" },
  { id: 3, event_name: "Freestyle 400M", event_category: "Swimming", start_time: "2022-12-17 15:00:00", end_time: "2022-12-17 16:00:00" },
  { id: 4, event_name: "High Jump", event_category: "Athletics", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 5, event_name: "Triple Jump", event_category: "Athletics", start_time: "2022-12-17 16:00:00", end_time: "2022-12-17 17:00:00" },
  { id: 6, event_name: "Long Jump", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 7, event_name: "100M Sprint", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 8, event_name: "Lightweight 60kg", event_category: "Boxing", start_time: "2022-12-17 18:00:00", end_time: "2022-12-17 19:00:00" },
  { id: 9, event_name: "Middleweight 75 kg", event_category: "Boxing", start_time: "2022-12-17 19:00:00", end_time: "2022-12-17 20:00:00" },
  { id: 10, event_name: "Heavyweight 91kg", event_category: "Boxing", start_time: "2022-12-17 20:00:00", end_time: "2022-12-17 22:00:00" }
];

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    // Fetch events from API or use mock data
    // axios.get('https://api.mocki.io/v1/your-mock-api').then(response => {
    //   setEvents(response.data);
    // }).catch(() => {
      setEvents(mockEvents);
    // });

    // Load selected events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('selectedEvents')) || [];
    setSelectedEvents(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  const handleSelect = (event) => {
    if (selectedEvents.length >= 3) {
      alert("You can only select up to 3 events.");
      return;
    }

    for (let selectedEvent of selectedEvents) {
      if ((dayjs(event.start_time).isBefore(dayjs(selectedEvent.end_time)) && dayjs(event.start_time).isAfter(dayjs(selectedEvent.start_time))) ||
        (dayjs(event.end_time).isBefore(dayjs(selectedEvent.end_time)) && dayjs(event.end_time).isAfter(dayjs(selectedEvent.start_time)))) {
        alert("Selected event conflicts with an already selected event.");
        return;
      }
    }

    setSelectedEvents([...selectedEvents, event]);
  };

  const handleDeselect = (eventId) => {
    setSelectedEvents(selectedEvents.filter(event => event.id !== eventId));
  };

  return (
    <div className="App">
      <div className="events-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} onSelect={handleSelect} />
        ))}
      </div>
      <SelectedEventList events={selectedEvents} onDeselect={handleDeselect} />
    </div>
  );
};

export default App;

