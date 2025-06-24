import Link from "next/link";
import QuantitySelect from "../layout/select/QuantitySelect";

const ContactSection = () => {
  return (
    <section className="register-section-3 section-padding">
      <div className="container">
        <div className="register-wrapper-3">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="register-content style-contact">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    HAVE ANY QUESTIONS? CONTACT WITH US
                  </h2>
                </div>
                <h3 data-aos="fade-up" data-aos-delay="500">
                  OUR CONTACT
                </h3>
                <ul
                  className="contact-list-2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <li>
                    <i className="fas fa-envelope"></i>
                    <div className="content">
                      <span>Our Email</span>
                      <h4>
                        <Link href="mailto:helloevantbiz@gmail.com">
                          helloevantbiz@gmail.com
                        </Link>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="content">
                      <span>Our Location</span>
                      <h4>27 Division St, New York, NY 10002, USA</h4>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <div className="content">
                      <span>Our Contact</span>
                      <h4>
                        <Link href="tel:+1800123456789">
                          +1 800 123 456 789
                        </Link>
                      </h4>
                    </div>
                  </li>
                </ul>
                <div
                  className="social-icon d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
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
            <div className="col-lg-6">
              <div
                className="register-form-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>REGISTER NOW TO JOIN EVENT</h3>
                <form action="contact.php" className="register-form">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Name</span>
                        <i className="far fa-user"></i>
                        <input
                          type="text"
                          name="name"
                          id="name2"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Email</span>
                        <i className="far fa-envelope-open"></i>
                        <input
                          type="text"
                          name="name"
                          id="email20"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Phone</span>
                        <i className="far fa-phone-alt"></i>
                        <input
                          type="text"
                          name="name"
                          id="phone2"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Ticket Quantity</span>
                        <i className="far fa-ticket-alt"></i>
                        <QuantitySelect />
                      </div>
                    </div>
                    <div className="col-lg12">
                      <button type="submit" className="theme-btn">
                        Register Now <i className="fas fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
