import Image from "next/image";
import Link from "next/link";
import EventScheduleData from "@/public/data/event-schedule-data";
import one from "@/public/images/event/shape-1.png";
import two from "@/public/images/event/shape-2.png";

const EventScheduleSection = () => {
  return (
    <section className="event-shedule-section section-padding fix">
      <div className="left-shape">
        <Image src={one} alt="Shape" width={100} height={100} />
      </div>
      <div className="right-shape">
        <Image src={two} alt="Shape" width={100} height={100} />
      </div>
      <div className="container">
        {EventScheduleData.map((day, index) => (
          <div key={index}>
            <div className="section-title text-center pb-3 pb-md-0">
              <h2 data-aos="fade-up" data-aos-delay="300">
                {day.title}
              </h2>
            </div>

            <div
              className={`event-shedule-wrapper ${
                index !== EventScheduleData.length - 1
                  ? "section-padding pt-0"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {day.items.map((event, i) => (
                <div
                  className={`event-box-item ${
                    i === day.items.length - 1 ? "mb-0" : ""
                  }`}
                  data-aos-delay={event.delay}
                  key={event.id}
                >
                  <div className="event-image">
                    <Image src={event.image} alt="Event" />
                    <div className={`content ${i % 2 !== 0 ? "bg-2" : ""}`}>
                      <span>SPEAKER</span>
                      <h4>
                        <Link href="/schedule">{event.speaker}</Link>
                      </h4>
                    </div>
                  </div>
                  <div
                    className={`event-content ${
                      i % 3 === 0 ? "bg-3" : i % 3 === 1 ? "bg-5" : "bg-6"
                    }`}
                  >
                    <ul className="event-list">
                      <li>
                        <i className="flaticon-time"></i> {event.time}
                      </li>
                      <li>
                        <i className="flaticon-placeholder"></i>{" "}
                        {event.location}
                      </li>
                    </ul>
                    <h3>
                      <Link href="/schedule">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventScheduleSection;
