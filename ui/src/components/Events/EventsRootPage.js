import React from 'react';
import EventCard from './EventCard';

const EventsRootPage = (props) => (
  <section>
    <div className="container my-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit temporibus assumenda
        repudiandae sunt neque reiciendis consequatur fugit nulla suscipit laborum, corrupti nam
        maxime qui reprehenderit, consequuntur aut deleniti possimus facere tempora. Aliquid eveniet
        at neque blanditiis! Dolore quidem et labore est, molestias amet aut ullam mollitia minima
        modi vero ipsam eligendi blanditiis laboriosam, consectetur nesciunt cum reiciendis pariatur
        officiis? Aliquid sapiente vel sint? Doloribus repellat perferendis fuga magnam architecto
        sit quis est molestiae. Dolorem rem voluptate minima dolorum animi dolores eveniet est quas
        cum delectus officia qui, laboriosam unde aliquam sunt ipsam vero minus fugit eum neque
        quae, veritatis.
      </p>

      <div className="event__list my-5">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  </section>
);

export default EventsRootPage;
