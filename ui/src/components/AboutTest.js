import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const AboutTest = (props) => (
  <div>
    <p>AboutTest Component</p>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.content} />
  </div>
);

export default AboutTest;
