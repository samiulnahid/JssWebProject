import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const HomeService = (props) => {
  console.log('HomeService', props);

  return (
    <section className="service_section layout_padding">
      <p>{JSON.stringify(props)}</p>
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <Text field={props.fields.heading} />
            </h2>
            <p>
              <RichText field={props.fields.Description} />
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src="" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Currency Wallet</h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src="" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Security Storage</h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src="" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Expert Support</h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
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
