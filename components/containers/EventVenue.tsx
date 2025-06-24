import Image from "next/image";
import one from "@/public/images/event/event-venue.jpg";

const EventVenue = () => {
  return (
    <section className="event-venue-section section-padding">
      <div className="container">
        <div className="event-venue-wrapper-area">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
              <div className="thumb">
                <Image src={one} alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h2 data-aos="fade-up" data-aos-delay="300">
                  1750 RANCHERO RD, TEXAS 78028, USA
                </h2>
                <p data-aos="fade-up" data-aos-delay="500">
                  In the world of digital design, many software tools and online
                  platforms have adopted placeholder text as their standard.
                  Searching for placeholder text reveals a plethora of websites
                  still in development. Over time, different iterations have
                  emerged
                </p>
                <div
                  className="contact-list"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <ul className="list">
                    <li>
                      <i className="flaticon-calendar"></i>
                      23-25 APR 2025
                    </li>
                    <li>
                      <i className="flaticon-time"></i>
                      09:AM-10;00PM
                    </li>
                    <li>
                      <i className="flaticon-placeholder"></i>
                      Zhylianska St, 976, Kyiv, Ukraine.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventVenue;
