import { RichText, Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const getDateFormatted = (date) => new Date(date).toLocaleString();

const EventComponent = (props) => {
  const { title, author, content, endDate, startDate } = props?.sitecoreContext?.route?.fields;

  return (
    <section>
      <div className="container mb-5 mt-4">
        <Text tag="h1" field={title} />

        <div className="date my-4">
          <h6>Start Date: {getDateFormatted(startDate.value)} </h6>
          <h6>End Date: {getDateFormatted(endDate.value)} </h6>
        </div>

        <Text tag="p" field={author} style={{ fontStyle: 'italic', fontSize: 14 }} />
        <RichText field={content} className="mt-4" />
      </div>
      {/* <Text field={props.fields.title} /> */}
    </section>
  );
};

export default withSitecoreContext()(EventComponent);
