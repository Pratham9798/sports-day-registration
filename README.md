# Sports Day Registration App

## Overview

This is a ReactJS web application designed to help users register for events in a Sports Day. The application allows users to view a list of events, select up to three events, and ensure that no two selected events conflict in timing. The selected events are persisted across page refreshes using `localStorage`.

## Features

- **View Events**: Displays a list of all available events.
- **Select Events**: Users can select events with a button next to each event.
- **Deselect Events**: Users can remove events from their selection.
- **Time Conflict Handling**: Prevents users from selecting events that overlap in timing.
- **Persistence**: Retains selected events in `localStorage` even after page refreshes.
- **Maximum Selection Limit**: Users can select up to three events only.

## Setup Instructions

### Prerequisites

- Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the Repository**
  
   git clone https://github.com/your-username/sports-day-registration.git
   cd sports-day-registration
npm install
npm start


sports-day-registration/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EventCard.js
│   │   └── SelectedEventList.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md


Usage
Run the Application

npm start
Open your browser and navigate to http://localhost:3000.

Select Events

Browse the list of events.
Click the "Select" button next to each event to add it to your selection. You can select up to three events.
Ensure no selected events conflict in timing.
Deselect Events

In the "Selected Events" section, click the "Deselect" button next to each event to remove it from your selection.
Persistence

Your selected events will be saved even if you refresh the page.
