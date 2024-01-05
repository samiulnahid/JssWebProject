import React from 'react';

export default function Testimonial() {
  return (
    <div className="item">
      <div className="box">
        <div className="img-box">
          <img src="images/client1.jpg" alt="" className="box-img" />
        </div>
        <div className="detail-box">
          <div className="client_id">
            <div className="client_info">
              <h6>LusDen</h6>
              <p>magna aliqua. Utdsad</p>
            </div>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </p>
        </div>
      </div>
    </div>
  );
}
