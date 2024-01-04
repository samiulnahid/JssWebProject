import { Image, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const HomeWhyUs = (props) => (
  <section className="why_section layout_padding">
    {/* <small>{JSON.stringify(props)}</small> */}

    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          <Text field={props.fields.Heading} />
        </h2>
      </div>
      <div className="why_container">
        {props.fields?.Speciality?.map((item) => (
          <div key={item.id} className="box">
            <div className="img-box">
              <Image field={item.fields?.PromoImage.value} />
            </div>
            <div className="detail-box">
              <h5>{item.fields?.PromoTitle.value}</h5>
              <p>{item.fields?.PromoDescription.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-box">
        <a href=""> Read More </a>
      </div>
    </div>
  </section>
);

export default HomeWhyUs;
