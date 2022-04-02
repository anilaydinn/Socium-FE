import React from "react";
import image from "../../assets/images/profile.jpg";

const AboutBox = () => {
  return (
    <div className="bg-light py-5">
      <div className="container py-0">
        <div className="row mb-2 justify-content-center">
          <div className="col-lg-5">
            <h2 className="display-4 font-weight-light text-center">
              About Us
            </h2>
            <p className="font-italic text-muted text-center">
              Socium is a social media platform where you can communicate with
              your friends and people close to you and share your best moments
              with them as videos or pictures.
            </p>
          </div>
        </div>
        <div className="row mb-4 justify-content-center">
          <div className="col-lg-5">
            <h2 className="display-4 font-weight-light text-center">
              Our team
            </h2>
          </div>
        </div>

        <div className="row text-center justify-content-center">
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src={image}
                alt=""
                width="100"
                height="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Anıl Aydın</h5>
              <span className="small text-uppercase text-muted">
                CEO - Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
