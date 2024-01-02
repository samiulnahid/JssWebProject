import { Image, RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const HomeAboutUs = (props) => (
  <section className="about_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          <Text field={props.fields.Heading} />
        </h2>
        <p>
          <RichText field={props.fields.Description} />
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <Image field={props.fields.PromoImage} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h3>
              <Text field={props.fields.PromoTitle} />
            </h3>
            <div>
              <RichText field={props.fields.PromoDescription} />
            </div>
            <a href=""> Read More </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeAboutUs;
