import React from "react";

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="d-flex flex-column justify-column-center align-items-center pt-3">
        <i className="bi bi-envelope display-3 text-white"></i>
        <h3 className="text-white mt-3">Stay informed about special offers</h3>
        <h5 className="text-white fst-italic mt-2">
          Subscribe to the newsletter
        </h5>
        <div className="input-group mb-3 mt-4 w-50">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-warning px-4" type="button" id="button-addon2">
            Button
          </button>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="map" style={{ width: "100%", height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0140917080264!2d-1.6167104845913828!3d6.674039219054421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf5960304a5667%3A0x5c5693d9a074f0d!2sKumasi%2C%20Ghana!5e0!3m2!1sen!2s!4v1646058255750!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      <div className="container">
        <footer className="py-5">
          <div className="row row-cols-2 row-cols-md-4 text-white">
            <div>
              <h4>About</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Certificate
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Market
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Products</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Cocktails
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Smoothies
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Foods
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <span>kumasi</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    <i className="bi bi-envelope-at me-2"></i>
                    <span>foodhub@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 mt-4 border-top">
            <p className="text-white">&copy; All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="bi bi-facebook text-white"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="bi bi-twitter text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
