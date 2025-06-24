import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/footer/blur.png";
import two from "@/public/images/footer/emoji.png";
import three from "@/public/images/footer/tab.png";
import logo from "@/public/images/logo/white-logo.svg";

const FooterFour = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section-4 section-padding pb-0 fix bg-cover"
      style={{ backgroundImage: "url(images/footer/footer-bg-5.jpg)" }}
    >
      <div className="left-shape">
        <Image src={one} alt="Image" />
      </div>
      <div className="right-shape">
        <Image src={two} alt="Image" />
      </div>
      <div className="top-shape">
        <Image src={three} alt="Image" />
      </div>
      <div className="container">
        <div className="footer-content-4">
          <h2 className="text-anim">
            BECOME PART OF THE WORLD&apos;S LARGEST <br /> DESIGN COMMUNITY
          </h2>
          <div
            className="footer-button"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link href="sponsor" className="theme-btn style-2">
              Become A Sponsor <i className="fas fa-long-arrow-right"></i>
            </Link>
            <Link href="contact" className="theme-btn">
              Get a Ticket <i className="fas fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-widgets-wrapper style-3">
        <div className="container">
          <div className="row g-4 justify-content-between justify-content-between">
            <div
              className="col-xl-4 col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/" className="foorer-logo">
                    <Image src={logo} alt="Image" />
                  </Link>
                </div>
                <div className="content2">
                  <p>
                    A wide range of desktop publishing tools and web design
                    editors now feature. We bring over 2,600 journalists from
                    the world&apos;s leading publications to Web Summit.
                  </p>
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
          </div>
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

export default FooterFour;
