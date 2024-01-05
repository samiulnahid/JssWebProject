/* eslint-disable */
import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';
import Testimonial from './Home/Testimonial';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HomeTestimonial = (props) => (
  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center psudo_white_primary mb_45">
        <h2>
          Our Clients Says
          <Text field={props.fields.Heading} />
        </h2>
      </div>

      <div className="carousel-wrap">
        <div className="owl-carousel client_owl-carousel">
          {/* Slider */}
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            modules={[Pagination]}
            pagination={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            style={{ paddingBottom: 30, userSelect: 'none' }}
          >
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

export default HomeTestimonial;
