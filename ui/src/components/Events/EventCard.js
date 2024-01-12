import React from 'react';
import { Link } from 'react-router-dom';
import { getDateFormatted } from './EventComponent';

export default function EventCard({ data }) {
  return (
    <Link
      to={'/'}
      className="event__card mb-4 d-block d-lg-flex justify-content-between gap-4 border p-3 shadow-sm text-black"
    >
      <div>
        <h3 className="mb-2 text-md font-extrabold">{data?.title?.value}</h3>
        <p style={{ fontStyle: 'italic', fontSize: 14, marginBottom: 0 }}>{data?.author?.value}</p>
      </div>

      <div className="date d-md-flex flex-column h-100 gap-3 align-between">
        <div>Start Date: {getDateFormatted(data?.startDate?.value)} </div>
        <div>End Date: {getDateFormatted(data?.endDate?.value)} </div>
      </div>
    </Link>
  );
}
