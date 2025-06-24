import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/event/shape-3.png";
import two from "@/public/images/event/shape-4.png";

interface EventProps {
  layout?: "one" | "two";
}

const EventAttend = ({ layout = "one" }: EventProps) => {
  return (
    <section
      className={`event-attended-section section-padding fix${
        layout === "two" ? " pt-0" : " "
      }`}
    >
      <div className="container">
        <div className="left-shape">
          <Image src={one} alt="Image" />
        </div>
        <div className="right-shape">
          <Image src={two} alt="Image" />
        </div>
        <div className="section-title text-center">
          <h2 className="text-anim">
            WHY ATTENDED DIGITAL <br /> MARKETING EVENTS OF 2025
          </h2>
          <p className="mt-3 mt-mb-0" data-aos="fade-up" data-aos-delay="500">
            Welcome to the 2024 global innovation summit, where the brightest
            minds and visionary <br /> leaders gather to explore the future of
            technology & innovation.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="event-attended-item asslideupcta">
              <div className="icon">
                <i className="flaticon-global-network"></i>
              </div>
              <div className="content">
                <h3>
                  <Link href="schedule">NETWORKING</Link>
                </h3>
                <p>
                  How you transform your business as tech, consumer, habits
                  industry for the dynamic change, Find out from those leading
                  the charge.
                </p>
                <Link href="schedule" className="link-btn">
                  Get Event Ticket <i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="event-attended-item style-2">
              <div className="icon">
                <i className="flaticon-community"></i>
              </div>
              <div className="content">
                <h3>
                  <Link href="schedule">DAY MEETUP</Link>
                </h3>
                <p>
                  How you transform your business as tech, consumer, habits
                  industry for the dynamic change, Find out from those leading
                  the charge.
                </p>
                <Link href="schedule" className="link-btn">
                  Get Event Ticket <i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="event-attended-item style-3 asslideupcta">
              <div className="icon">
                <i className="flaticon-mentor"></i>
              </div>
              <div className="content">
                <h3>
                  <Link href="schedule">MENTOR PROGRAM</Link>
                </h3>
                <p>
                  How you transform your business as tech, consumer, habits
                  industry for the dynamic change, Find out from those leading
                  the charge.
                </p>
                <Link href="schedule" className="link-btn">
                  Get Event Ticket <i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAttend;
