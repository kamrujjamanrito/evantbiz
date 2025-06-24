import Link from "next/link";

const CtaThree = () => {
  return (
    <section className="cta-section-2 section-padding pt-0 fix">
      <div className="container">
        <div
          className="cta-bg-wrapper bg-cover"
          style={{ backgroundImage: "url(images/cta/cta-bg-1.jpg)" }}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-content">
                <div className="setion-title">
                  <h2 className="text-white text-anim">
                    EARLY BIRD TICKETS AVAILABLE
                  </h2>
                  <p
                    className="mt-3 mt-mb-0 text-white"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Conference for creatives that focuses on community and
                    unforgettable experiences.
                  </p>
                </div>
                <Link
                  href="contact"
                  className="theme-btn"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Get a Ticket <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaThree;
