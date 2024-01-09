import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sitecoreApiHost, sitecoreApiKey } from '../temp/config';

const JssReactForm = (props) => {
  const navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(url);
  };

  return (
    <section className="sitecore__form">
      <Form
        form={props.fields}
        sitecoreApiHost={sitecoreApiHost}
        sitecoreApiKey={sitecoreApiKey}
        onRedirect={handleRedirect}
      />
    </section>
  );
};

export default JssReactForm;
