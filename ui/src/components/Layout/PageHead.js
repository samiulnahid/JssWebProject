import React from 'react';
import Helmet from 'react-helmet';

export default function PageHead({ route }) {
  return (
    <Helmet>
      <title>
        {(route.fields && route.fields.MetaTitle && route.fields.MetaTitle.value) || 'No Title'}
      </title>

      <meta
        name="description"
        content={route.fields && route.fields.MetaDescription && route.fields.MetaDescription.value}
      />
    </Helmet>
  );
}
