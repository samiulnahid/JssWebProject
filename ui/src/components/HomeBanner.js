import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const HomeBanner = (props) => (
  <>
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">{/* <img src="" alt="ds"> */}</div>
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
                        Crypto <br />
                        Currency
                      </h1>
                      <p>HomeBanner Component</p>
                      <Text field={props.fields.heading} />
                      <p className="__red">
                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
                        fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
                        molestias, veniam, vel architecto veritatis delectus repellat modi impedit
                        sequi.
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
                      <img src="images/slider-img.png" alt="" />
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
