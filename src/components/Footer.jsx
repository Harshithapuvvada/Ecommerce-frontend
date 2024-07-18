import React from 'react';
import '../styles/Footer.css';



const Footer = () => {
  return (
    <footer id="footer" style={{ marginTop: '50px' }}>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <a href="#product_">
              </a>
              <p>
                India <br />
                Andhrapradesh <br />
                <br />
                <strong>Phone:</strong> +91 6309965904 <br />
                <strong>Email:</strong> Online-Shop.com <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#about">About Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <p>Explore Our Services in the fashion</p>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#product-cards">Mens</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#product-cards1">Womens</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#product-cards2">Kids</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Occasion</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Formal</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Network</h4>
              <p>Connect Stay Updated with us on</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright <strong><span>Online Shop</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Harshitha</a>
        </div>
      </div>
      <a href="#" className="arrow">
        <i>
          <img src="/images/arrow.png" alt="" />
        </i>
      </a>
    </footer>
  );
};

export default Footer;
