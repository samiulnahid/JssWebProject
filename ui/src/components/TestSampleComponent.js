import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const TestSampleComponent = (props) => {
  function handleAlert() {
    alert('Logo');
  }

  return (
    <div>
      <p>TestSampleComponent Component</p>
      <button onClick={handleAlert}>Test Button</button>
      <Text field={props.fields.heading} />
    </div>
  );
};

export default TestSampleComponent;
