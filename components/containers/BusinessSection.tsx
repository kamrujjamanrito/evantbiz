import Link from "next/link";
import Image from "next/image";
import Counter from "../Counter";
import one from "@/public/images/event/star.png";
import two from "@/public/images/event/cross.png";
import three from "@/public/images/event/line.png";

const BusinessSection = () => {
  return (
    <section className="business-conference-section section-padding fix">
      <div className="shape-1 float-bob-y">
        <Image src={one} alt="Image" />
      </div>
      <div className="shape-2 float-bob-x">
        <Image src={two} alt="Image" />
      </div>
      <div className="shape-3 float-bob-y">
        <Image src={three} alt="Image" />
      </div>
      <div className="container">
        <div className="business-conference-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="business-conference-item">
                <div className="section-title text-center">
                  <h2 className="text-anim">
                    BUSINESS CONFERENCE AND EVENT <br /> MANAGEMENT IN 2025
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-delay="500">
                  Welcome to the 2024 global innovation summit, where the
                  brightest minds and visionary leaders gather to explore the
                  future of technology & innovation. join us for three days of
                  insightful talks, interactive workshops, and unparalleled
                  networking.
                </p>
                <div className="event-button">
                  <Link
                    href="sponsor"
                    className="theme-btn style-2"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Become A Sponsor <i className="fas fa-long-arrow-right"></i>
                  </Link>
                  <Link
                    href="contact"
                    className="theme-btn"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Get a Ticket <i className="fas fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-wrapper">
          <div className="counter-item" data-aos="fade-up" data-aos-delay="300">
            <div className="icon">
              <i className="flaticon-hand"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={5930} />+
              </h2>
              <p>PARTICIPANTS</p>
            </div>
          </div>
          <div className="counter-item" data-aos="fade-up" data-aos-delay="500">
            <div className="icon bg-2">
              <i className="flaticon-servers"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={780} />+
              </h2>
              <p>EVENT HOSTED</p>
            </div>
          </div>
          <div className="counter-item" data-aos="fade-up" data-aos-delay="700">
            <div className="icon bg-3">
              <i className="flaticon-event"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={24} />+
              </h2>
              <p>EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
