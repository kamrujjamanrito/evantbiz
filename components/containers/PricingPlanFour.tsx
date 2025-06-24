import Link from "next/link";

const PricingPlanFour = () => {
  return (
    <section className="pricing-section-4 section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="text-anim">
              HOW TO PARTICIPATE TO <br /> OUR EVENTS?
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="500">
            Welcome to the 2024 global innovation summit, where the <br />{" "}
            brightest minds and visionary leaders gather to explore the <br />{" "}
            future of technology & innovation.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="pricing-box-items-4 asslideupcta">
              <div className="pricing-header">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-woman"></i>
                  </div>
                  <div className="content">
                    <h3>SINGLE ACCESS</h3>
                    <p>All prices exclude 15% VAT</p>
                  </div>
                </div>
                <h2>
                  $29.00<sub>/month</sub>
                </h2>
              </div>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
              <h4>WHAT&apos;S INCLUDED</h4>
              <ul className="pricing-list">
                <li>Breakfast, Lunch, Free Parking</li>
                <li>Standard Networking Opportunities</li>
                <li>Recording of All Talks</li>
                <li>
                  <del> Premium Conference Materials</del>
                </li>
                <li>
                  <del> Full or half-day instructor-led course</del>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="pricing-box-items-4 active">
              <div className="pricing-header">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-badge"></i>
                  </div>
                  <div className="content">
                    <h3>FOR VIP ACCESS</h3>
                    <p>All prices exclude 15% VAT</p>
                  </div>
                </div>
                <h2>
                  $49.00<sub>/month</sub>
                </h2>
              </div>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
              <h4>WHAT&apos;S INCLUDED</h4>
              <ul className="pricing-list">
                <li>Breakfast, Lunch, Free Parking</li>
                <li>Standard Networking Opportunities</li>
                <li>Recording of All Talks</li>
                <li>Premium Conference Materials</li>
                <li>
                  <del> Full or half-day instructor-led course</del>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="pricing-box-items-4 active-2 asslideupcta">
              <div className="pricing-header">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-file"></i>
                  </div>
                  <div className="content">
                    <h3>STANDARD ACCESS</h3>
                    <p>All prices exclude 15% VAT</p>
                  </div>
                </div>
                <h2>
                  $89.00<sub>/month</sub>
                </h2>
              </div>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
              <h4>WHAT&apos;S INCLUDED</h4>
              <ul className="pricing-list">
                <li>Breakfast, Lunch, Free Parking</li>
                <li>Standard Networking Opportunities</li>
                <li>Recording of All Talks</li>
                <li>Premium Conference Materials</li>
                <li>Full or half-day instructor-led course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanFour;
