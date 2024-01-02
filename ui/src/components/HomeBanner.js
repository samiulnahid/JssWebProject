import { Image, RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const HomeBanner = (props) => (
  <>
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <Image field={props.fields.BackgroundImage} />
        </div>
      </div>

      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        <Text field={props.fields.Heading} />
                      </h1>
                      <p className="__red">
                        <RichText field={props.fields.Description} />
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <Image field={props.fields.HeroImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default HomeBanner;
