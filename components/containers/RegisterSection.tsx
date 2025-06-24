import QuantitySelect from "../layout/select/QuantitySelect";

const RegisterSection = () => {
  return (
    <section className="register-section-3 section-padding pt-0">
      <div className="container">
        <div className="register-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="register-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    REGISTER NOW FOR JOINING MARKETING MEETUP EVENT
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-delay="500">
                  Welcome to the 2024 global innovation summit, where the
                  brightest minds and visionary leaders gather to explore the
                  future of technology & innovation. join us for three days of
                  insightful talks, interactive workshops, and unparalleled
                  networking.
                </p>
                <ul
                  className="contact-list"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <li>
                    <div className="icon-items">
                      <span>
                        <i className="flaticon-calendar"></i>
                        23-25 APR 2025
                      </span>
                      <span>
                        <i className="flaticon-time"></i>
                        09:AM-10;00PM
                      </span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-placeholder"></i>
                    Zhylianska St, 976, Kyiv, Ukraine.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="register-form-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>REGISTER NOW TO JOIN EVENT</h3>
                <form action="#" className="register-form">
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

export default RegisterSection;
