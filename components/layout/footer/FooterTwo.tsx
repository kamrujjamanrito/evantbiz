import Link from "next/link";
import Image from "next/image";
import shapeOne from "@/public/images/footer/shape-1.png";
import shapeTwo from "@/public/images/footer/shape-2.png";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section-2 fix bg-cover"
      style={{ backgroundImage: "url(images/footer/footer-bg-2.jpg)" }}
    >
      <div className="left-shape">
        <Image src={shapeOne} alt="Image" />
      </div>
      <div className="right-shape">
        <Image src={shapeTwo} alt="Image" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div
                className="col-xl-4 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>OUR CONTACT</h3>
                  </div>
                  <div className="footer-content">
                    <h6>
                      <i className="fas fa-comment-dots"></i>
                      <Link href="mailto:helloevantbiz@gmail.com">
                        helloevantbiz@gmail.com
                      </Link>
                    </h6>
                    <h6>
                      <i className="flaticon-placeholder"></i>
                      27 Division St, New York, NY 10002, USA
                    </h6>
                    <h6>
                      <i className="flaticon-phone-call"></i>
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
                className="col-xl-4 col-lg-6 col-md-6 ps-lg-5"
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
                className="col-xl-4 col-lg-6 col-md-6 ps-xl-5"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="single-footer-widget">
                  <div className="content">
                    <h3>
                      GET INSIDE THE HUSTLE <br /> LIMITED SEATS AVAILABLE.{" "}
                      <br /> BOOK YOURS NOW
                    </h3>
                    <Link href="contact" className="theme-btn">
                      Get a Ticket <i className="fas fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-2">
        <div className="container">
          <div className="footer-bottom-wrapper-2">
            <p>
              Copyright <Link href="/">Evantbiz</Link> &copy; {currentYear} All
              Rights Reserved.
            </p>
            <ul className="footer-menu">
              <li>
                <Link href="contact">Booking Info</Link>
              </li>
              <li>
                <Link href="contact">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="contact">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
