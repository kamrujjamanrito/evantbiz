import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/speakar/details-1.png";
import two from "@/public/images/event-schedul/client-1.png";
import three from "@/public/images/event-schedul/client-2.png";
import four from "@/public/images/event-schedul/client-3.png";
import five from "@/public/images/event-schedul/client-4.png";

const SpeakerDetails = () => {
  return (
    <section className="speakar-details-section fix section-padding">
      <div className="container">
        <div className="speakar-details-wrapper">
          <div className="row g-4">
            <div
              className="col-lg-4 order-2 order-md-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="speakar-details-left">
                <div className="thumb">
                  <Image src={one} alt="Image" />
                </div>
                <div className="content">
                  <span>Brand Designer</span>
                  <h3>LOGAN PETERSON</h3>
                  <p>
                    How you transform your business as tech, consumer, habits
                    industry for the dynamic change, Find out from those leading
                    the charge. How you transform your business as tech,
                    consumer.
                  </p>
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
            <div className="col-lg-8 order-1 order-md-2">
              <div className="event-schedul-wrapper-3 style-spekar-wrapper">
                <div
                  className="event-schedul-items"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={two} alt="Image" />
                      </div>
                      <div className="content">
                        <h6>EMILY ROBERTS</h6>
                        <p>Lead Designer</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i>
                      9:00 AM - 10:00 AM
                    </span>
                  </div>
                  <div className="event-schedul-right-items">
                    <div
                      className="event-bg bg-cover"
                      style={{
                        backgroundImage:
                          "url(images/event-schedul/event-bg.jpg)",
                      }}
                    ></div>
                    <div className="event-cont">
                      <h3>
                        <Link href="schedule">REGISTRATION & BREAKFAST</Link>
                      </h3>
                      <p>
                        A wide range of desktop publishing tools and web design
                        editors now feature dummy text as their primary example
                        content.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="event-schedul-items"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={three} alt="Image" />
                      </div>
                      <div className="content">
                        <h6>EMILY ROBERTS</h6>
                        <p>Lead Designer</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i>
                      10:00 AM - 12:00 PM
                    </span>
                  </div>
                  <div className="event-schedul-right-items">
                    <div
                      className="event-bg bg-cover"
                      style={{
                        backgroundImage:
                          "url(images/event-schedul/event-bg.jpg)",
                      }}
                    ></div>
                    <div className="event-cont">
                      <h3>
                        <Link href="schedule">
                          CHALLENGES OF A NEW BRANDING TECHNIQUE
                        </Link>
                      </h3>
                      <p>
                        A wide range of desktop publishing tools and web design
                        editors now feature dummy text as their primary example
                        content.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="event-schedul-items active"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={four} alt="Image" />
                      </div>
                      <div className="content">
                        <h6>Mala Ambani</h6>
                        <p>Lead Designer</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i>
                      12:00 PM - 02:00 PM
                    </span>
                  </div>
                  <div className="event-schedul-right-items">
                    <div
                      className="event-bg bg-cover"
                      style={{
                        backgroundImage:
                          "url(images/event-schedul/event-bg.jpg)",
                      }}
                    ></div>
                    <div className="event-cont">
                      <h3>
                        <Link href="schedule">
                          SUSTAINABLE BUSINESS PRACTICES FOR MODERN BRAND
                        </Link>
                      </h3>
                      <p>
                        A wide range of desktop publishing tools and web design
                        editors now feature dummy text as their primary example
                        content.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="event-schedul-items"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={five} alt="Image" />
                      </div>
                      <div className="content">
                        <h6>OLIVIA MARTINEZ</h6>
                        <p>Lead Designer</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i>
                      02:00 PM - 04:00 PM
                    </span>
                  </div>
                  <div className="event-schedul-right-items">
                    <div
                      className="event-bg bg-cover"
                      style={{
                        backgroundImage:
                          "url(images/event-schedul/event-bg.jpg)",
                      }}
                    ></div>
                    <div className="event-cont">
                      <h3>
                        <Link href="schedule">
                          BUILDING STRONGER CUSTOMER CONNECTIONS
                        </Link>
                      </h3>
                      <p>
                        A wide range of desktop publishing tools and web design
                        editors now feature dummy text as their primary example
                        content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerDetails;
