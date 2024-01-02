import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HomeAboutUs = (props) => (
  <div>
    <p>HomeAboutUs Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HomeAboutUs;
