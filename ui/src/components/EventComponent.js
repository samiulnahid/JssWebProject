import { DateField, RichText, Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const EventComponent = (props) => {
  console.log('🚀 ~ props:', props);
  const { title, author, content, endDate, startDate } = props?.sitecoreContext?.route?.fields;

  return (
    <div>
      <Text tag="h1" field={title} />
      <Text tag="p" field={author} />
      <RichText field={content} />
      <h6>
        Start Date: <DateField field={startDate} />
      </h6>
      <h6>
        End Date: <DateField field={endDate} />
      </h6>
      {/* <Text field={props.fields.title} /> */}
    </div>
  );
};

export default withSitecoreContext()(EventComponent);
