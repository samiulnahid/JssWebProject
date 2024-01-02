import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HomeWhyUs = (props) => (
  <div>
    <p>HomeWhyUs Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HomeWhyUs;
