import { Image, RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const HomeService = (props) => {
  return (
    <section className="service_section layout_padding">
      {/* <small>{JSON.stringify(props)}</small> */}

      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <Text field={props.fields?.heading} />
            </h2>
            <p>
              <RichText field={props.fields?.Description} />
            </p>
          </div>

          <div className="row">
            {props.fields?.Services?.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <Image field={item.fields?.PromoImage.value} />
                  </div>
                  <div className="detail-box">
                    <h5>{item.fields?.PromoTitle.value}</h5>
                    <p>{item.fields?.PromoDescription.value}</p>
                    <a href={item.fields?.PromoCTA.value.href}> Read More </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href=""> View All </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeService;
