import Link from "next/link";
import Image from "next/image";
import FooterGallery from "./FooterGallery";
import shapeOne from "@/public/images/footer/shape-1.png";
import shapeTwo from "@/public/images/footer/shape-2.png";
import shapeThree from "@/public/images/footer/chaka-shape.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section fix bg-cover"
      style={{ backgroundImage: "url(images/footer/footer-bg.jpg)" }}
    >
      <div className="left-shape">
        <Image src={shapeOne} alt="Image" />
      </div>
      <div className="right-shape">
        <Image src={shapeTwo} alt="Image" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="container">
            <div className="row g-4 justify-content-between justify-content-between">
              <div
                className="col-xl-3 col-lg-5 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="single-footer-widget">
                  <div className="footer-content">
                    <h3>EXAMPLE@EVANTBIZ.COM</h3>
                    <p>27 Division St, New York, NY 10002, USA</p>
                    <h6>
                      <Link href="tel:+1800123456789">+1 800 123 456 789</Link>
                    </h6>
                    <div className="social-icon d-flex align-items-center">
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-7 col-md-6 ps-lg-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>ABOUT EVENTBIZ</h3>
                  </div>
                  <div className="list-area-wrap">
                    <ul className="list-area">
                      <li>
                        <Link href="speakar">
                          <i className="fas fa-long-arrow-right"></i>
                          Our Speakers
                        </Link>
                      </li>
                      <li>
                        <Link href="schedule">
                          <i className="fas fa-long-arrow-right"></i>
                          Event Schedule
                        </Link>
                      </li>
                      <li>
                        <Link href="sponsor">
                          <i className="fas fa-long-arrow-right"></i>
                          Sponsors Team
                        </Link>
                      </li>
                      <li>
                        <Link href="about">
                          <i className="fas fa-long-arrow-right"></i>
                          About EvantBiz
                        </Link>
                      </li>
                    </ul>
                    <ul className="list-area">
                      <li>
                        <Link href="contact">
                          <i className="fas fa-long-arrow-right"></i>
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="pricing">
                          <i className="fas fa-long-arrow-right"></i>
                          Pricing Table
                        </Link>
                      </li>
                      <li>
                        <Link href="faq">
                          <i className="fas fa-long-arrow-right"></i>
                          Our FAQs
                        </Link>
                      </li>
                      <li>
                        <Link href="contact">
                          <i className="fas fa-long-arrow-right"></i>
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>OUR GALLERY</h3>
                  </div>
                  <FooterGallery />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle-wrapper">
          <div className="footer-text">
            <div className="shape-image" data-aos="fade-up">
              <Image src={shapeThree} alt="Image" />
            </div>
            <h2 className="img-custom-anim-left">EVANTBIZ</h2>
          </div>
          <Link
            href="contact"
            className="circle-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>
              <span className="icon">
                <i className="fas fa-long-arrow-right"></i>
              </span>
              Grab Ticket
            </span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <p>
            Copyright <Link href="/">Evantbiz</Link> &copy; {currentYear} All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
