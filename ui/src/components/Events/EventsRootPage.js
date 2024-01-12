import React from 'react';
import EventListWithPagination from './EventListWithPagination';
import EventSearch from './EventSearch';

const EventsRootPage = ({ fields }) => {
  const eventsList = fields?.items ? fields?.items : [];
  const filteredEvents = eventsList.filter((event) => event?.fields?.title);

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
          <EventListWithPagination events={filteredEvents} />
        </div>
      </div>
    </section>
  );
};

export default EventsRootPage;
