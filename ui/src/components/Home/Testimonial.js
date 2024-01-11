import React from 'react';

export default function Testimonial({ Address, Comment, Image, Name }) {
  return (
    <div className="item">
      <div className="box">
        <div className="img-box">
          <img src={Image?.value?.src} alt="" className="box-img" />
        </div>
        <div className="detail-box">
          <div className="client_id">
            <div className="client_info">
              <h6>{Name?.value}</h6>
              <p>{Address?.value}</p>
            </div>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <p>{Comment?.value}</p>
        </div>
      </div>
    </div>
  );
}
