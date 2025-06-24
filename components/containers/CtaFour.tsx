import Link from "next/link";

const CtaFour = () => {
  return (
    <section
      className="cta-section-3 fix section-padding bg-cover"
      style={{ backgroundImage: "url(images/cta/cta-bg-3.jpg)" }}
    >
      <div className="container">
        <div className="cta-wrapper-3">
          <div className="cta-content">
            <h2 className="text-anim">BOOK YOUR SEAT NOW!</h2>
            <p data-aos="fade-up" data-aos-delay="500">
              Entertainment & technology show inspirational speakers including
              game changing not just a large-scale conference but a large
              educational hub.
            </p>
          </div>
          <div className="cta-right">
            <Link
              href="contact"
              className="circle-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>
                <span className="icon">
                  <i className="fas fa-long-arrow-right"></i>
                </span>
                Get Ticket
              </span>
            </Link>
            <div className="icon-items" data-aos="fade-up" data-aos-delay="500">
              <div className="icon">
                <i className="flaticon-phone-call"></i>
              </div>
              <div className="content">
                <span>Or call for ticket</span>
                <h5>
                  <Link href="tel:+00479394888">+00 (47) 939 4888</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFour;
