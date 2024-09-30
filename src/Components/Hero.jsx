import React from "react";
import HeroImage from '../assets/Images/Meal.png'
import Certificate from '../assets/Images/certi.png'

const Hero = () => {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-10 col-sm-8 col-lg-5">
          <img
            src={HeroImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-1 fw-bold lh-1 mb-3">
           <span>Your Online Food lovers Shop</span>
          </h1>
          <div className="d-flex align-items-center my-5">
            <p className="fw-bold">Welcome to the food hub, the ultimate destination for food 
          lovers! We offer a diverse menu that caters to all tastes, from classic 
          comfort foods to gourmet delights. Whether you're craving a hearty meal, 
          a quick snack, or a sweet treat,
           we have something delicious waiting for you.</p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 rounded-0">
              Shop Your foods
            </button>
            <button type="button" className="btn btn-light btn-lg px-4 rounded-0">
              Shop All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
