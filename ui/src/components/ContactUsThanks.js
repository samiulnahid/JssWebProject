import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouComponent = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8  my-5">
          <div className="card shadow-lg my-md-5">
            <div className="card-body ">
              <h2 className="card-title text-center">Thank You!</h2>
              <p className="card-text">
                Thank you for contacting with us. Your support means a lot to us. We appreciate your
                time and effort.
              </p>
              <div className="text-center">
                <p className="card-text">Feel free to explore more of what we offer.</p>
                <Link to="/" className="primary__btn">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouComponent;
