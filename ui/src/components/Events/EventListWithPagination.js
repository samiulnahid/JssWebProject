/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import EventCard from './EventCard';

export default function EventListWithPagination({ events }) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = events.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(events.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % events.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((item) => {
        return <EventCard key={item?.id} data={item.fields} />;
      })}

      <div className="event__pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
