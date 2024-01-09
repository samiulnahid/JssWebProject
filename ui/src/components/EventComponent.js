import { Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const EventComponent = (props) => {
  console.log('🚀 ~ props:', props);

  return (
    <div>
      <p>EventComponent Component</p>
      <Text field={props.fields.title} />
    </div>
  );
};

export default withSitecoreContext(EventComponent);
