import Link from "next/link";

const PricingPlanThree = () => {
  return (
    <section className="pricing-section-3 fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim text-white">
            HOW TO PARTICIPATE <br /> TO OUR EVENTS?
          </h2>
          <p
            className="text-white mt-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Register now to take advantage of early-bird <br /> passes before
            they&apos;re gone.
          </p>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-card-items-3 asslideupcta">
              <div className="icon">
                <i className="flaticon-woman"></i>
              </div>
              <div className="pricing-header">
                <h3>SINGLE ACCESS</h3>
                <span>All prices exclude 15% VAT</span>
                <h2>$39.00</h2>
              </div>
              <p>
                A wide range of desktop publishing tools and web design editors
                now feature.
              </p>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-card-items-3 color-2">
              <div className="icon">
                <i className="flaticon-badge"></i>
              </div>
              <div className="pricing-header">
                <h3>FOR VIP ACCESS</h3>
                <span>All prices exclude 15% VAT</span>
                <h2>$49.00</h2>
              </div>
              <p>
                A wide range of desktop publishing tools and web design editors
                now feature.
              </p>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-card-items-3 color-3 asslideupcta">
              <div className="icon">
                <i className="flaticon-file"></i>
              </div>
              <div className="pricing-header">
                <h3>STANDARD ACCESS</h3>
                <span>All prices exclude 15% VAT</span>
                <h2>$89.00</h2>
              </div>
              <p>
                A wide range of desktop publishing tools and web design editors
                now feature.
              </p>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanThree;
