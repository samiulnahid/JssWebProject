import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HomeOurTeam = (props) => (
  <div>
    <p>HomeOurTeam Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HomeOurTeam;
