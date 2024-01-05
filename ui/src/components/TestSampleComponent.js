import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

function alert() {
  alert('Logo');
}

const TestSampleComponent = (props) => (
  <div>
    <p>TestSampleComponent Component</p>
    <button onClick={alert}>Test Button</button>
    <Text field={props.fields.heading} />
  </div>
);

export default TestSampleComponent;
