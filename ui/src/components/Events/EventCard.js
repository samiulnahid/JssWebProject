import React from 'react';
import { Link } from 'react-router-dom';
import { getDateFormatted } from './EventComponent';

export default function EventCard({ data }) {
  return (
    <Link to={'/'} className="event__card mb-4 d-block border p-3 shadow-sm text-black">
      <h3 className="mb-2 text-md font-extrabold">{data?.title?.value}</h3>

      <div className="d-md-flex justify-content-between">
        <p style={{ fontStyle: 'italic', fontSize: 14, marginBottom: 0 }}>{data?.author?.value}</p>

        <div className="date d-md-flex gap-5">
          <span>Start Date: {getDateFormatted(data?.startDate?.value)} </span>
          <span>End Date: {getDateFormatted(data?.endDate?.value)} </span>
        </div>
      </div>
    </Link>
  );
}
