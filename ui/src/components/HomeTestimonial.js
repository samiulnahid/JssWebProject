import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HomeTestimonial = (props) => (
  <div>
    <p>HomeTestimonial Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HomeTestimonial;
