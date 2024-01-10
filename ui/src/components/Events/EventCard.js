import React from 'react';
import { Link } from 'react-router-dom';
import { getDateFormatted } from './EventComponent';

export default function EventCard() {
  return (
    <Link to={'/'} className="event__card mb-4 d-block border p-3 shadow-sm text-black">
      <h3 className="mb-2 text-md font-extrabold">
        Event Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>

      <div className="d-md-flex justify-content-between">
        <p style={{ fontStyle: 'italic', fontSize: 14, marginBottom: 0 }}>Author Name</p>

        <div className="date d-md-flex gap-5">
          <span>Start Date: {getDateFormatted('2024-01-09T11:20:00Z')} </span>
          <span>End Date: {getDateFormatted('2024-01-09T11:20:00Z')} </span>
        </div>
      </div>
    </Link>
  );
}
