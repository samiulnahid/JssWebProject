import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import EventListWithPagination from './EventListWithPagination';
import EventSearch from './EventSearch';

const EventsRootPage = ({ fields }) => {
  const eventsList = fields?.items ? fields?.items : [];
  const filteredEvents = eventsList.filter((event) => event?.fields?.title);

  const [events, setEvents] = useState(filteredEvents);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (text) => {
    if (window.searchWithDebounce) clearTimeout(window.searchWithDebounce);

    window.searchWithDebounce = setTimeout(() => {
      const searchRegex = new RegExp(text, 'i');
      const filteredEvents = events.filter((book) => searchRegex.test(book?.fields?.title.value));

      setEvents(filteredEvents);
    }, 500);
  };

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) handleSearch(searchQuery);
  }, []);

  return (
    <section>
      <div className="container my-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit temporibus assumenda
          repudiandae sunt neque reiciendis consequatur fugit nulla suscipit laborum, corrupti nam
          maxime qui reprehenderit, consequuntur aut deleniti possimus facere tempora. Aliquid
          eveniet at neque blanditiis! Dolore quidem et labore est, molestias amet aut ullam
          mollitia minima modi vero ipsam eligendi blanditiis laboriosam, consectetur nesciunt cum
          reiciendis.
        </p>

        <div className="mt-5">
          <EventSearch />
        </div>

        <div className="event__list my-5">
          <EventListWithPagination events={events} />
        </div>
      </div>
    </section>
  );
};

export default EventsRootPage;
