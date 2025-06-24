"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/event/shape-1.png";
import two from "@/public/images/event/shape-2.png";
import EventScheduleData from "@/public/data/event-schedule-data";

const EventSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const firstDayItems = EventScheduleData[0].items;
  const secondDayItems = EventScheduleData[1].items;
  const thirdDayItems = EventScheduleData[2].items;

  return (
    <section className="event-shedule-section section-padding fix">
      <div className="left-shape">
        <Image src={one} alt="Image" />
      </div>
      <div className="right-shape">
        <Image src={two} alt="Image" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">
            GET THE BEST EXPERIENCE IN THE <br /> WORLD OF DESIGNING
          </h2>
        </div>
        <div className="event-shedule-wrapper">
          <ul className="nav">
            <li className="nav-item" data-aos="fade-up" data-aos-delay="200">
              <a
                className={`nav-link ${activeTabIndex === 0 ? "active" : " "}`}
                onClick={() => handleTabClick(0)}
              >
                Day 01
                <span>23 JAN</span>
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="400">
              <a
                className={`nav-link ${activeTabIndex === 1 ? "active" : " "}`}
                onClick={() => handleTabClick(1)}
              >
                Day 02
                <span>24 JAN</span>
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="600">
              <a
                className={`nav-link ${activeTabIndex === 2 ? "active" : " "}`}
                onClick={() => handleTabClick(2)}
              >
                Day 03
                <span>25 JAN</span>
              </a>
            </li>
          </ul>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div
              id="thumb1"
              className={`tab-pane fade ${
                activeTabIndex === 0 ? "show active" : ""
              }`}
            >
              {firstDayItems.map((event, index) => (
                <div
                  key={event.id}
                  className={`event-box-item ${
                    index === firstDayItems.length - 1 ? "mb-0" : ""
                  }`}
                >
                  <div className="event-image">
                    <Image src={event.image} alt="Image" />
                    <div
                      className={`content ${
                        index % 2 === 1 ? "bg-2 text-anim" : ""
                      }`}
                    >
                      <span>SPEAKER</span>
                      <h4>
                        <Link href="schedule">{event.speaker}</Link>
                      </h4>
                    </div>
                  </div>
                  <div
                    className={`event-content ${
                      index === 1
                        ? "bg-2"
                        : index === 2
                        ? "bg-3"
                        : index === 3
                        ? "bg-4"
                        : ""
                    }`}
                  >
                    <ul className="event-list">
                      <li>
                        <i className="flaticon-time"></i>
                        {event.time}
                      </li>
                      <li>
                        <i className="flaticon-placeholder"></i>
                        {event.location}
                      </li>
                    </ul>
                    <h3>
                      <Link href="schedule">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              id="thumb2"
              className={`tab-pane fade ${
                activeTabIndex === 1 ? "show active" : ""
              }`}
            >
              {secondDayItems.map((event, index) => (
                <div
                  key={event.id}
                  className={`event-box-item ${
                    index === secondDayItems.length - 1 ? "mb-0" : ""
                  }`}
                >
                  <div className="event-image">
                    <Image src={event.image} alt="Image" />
                    <div
                      className={`content ${
                        index % 2 === 1 ? "bg-2 text-anim" : ""
                      }`}
                    >
                      <span>SPEAKER</span>
                      <h4>
                        <Link href="schedule">{event.speaker}</Link>
                      </h4>
                    </div>
                  </div>
                  <div
                    className={`event-content ${
                      index === 1
                        ? "bg-2"
                        : index === 2
                        ? "bg-3"
                        : index === 3
                        ? "bg-4"
                        : ""
                    }`}
                  >
                    <ul className="event-list">
                      <li>
                        <i className="flaticon-time"></i>
                        {event.time}
                      </li>
                      <li>
                        <i className="flaticon-placeholder"></i>
                        {event.location}
                      </li>
                    </ul>
                    <h3>
                      <Link href="schedule">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              id="thumb3"
              className={`tab-pane fade ${
                activeTabIndex === 2 ? "show active" : ""
              }`}
            >
              {thirdDayItems.map((event, index) => (
                <div
                  key={event.id}
                  className={`event-box-item ${
                    index === thirdDayItems.length - 1 ? "mb-0" : ""
                  }`}
                >
                  <div className="event-image">
                    <Image src={event.image} alt="Image" />
                    <div
                      className={`content ${
                        index % 2 === 1 ? "bg-2 text-anim" : ""
                      }`}
                    >
                      <span>SPEAKER</span>
                      <h4>
                        <Link href="schedule">{event.speaker}</Link>
                      </h4>
                    </div>
                  </div>
                  <div
                    className={`event-content ${
                      index === 1
                        ? "bg-2"
                        : index === 2
                        ? "bg-3"
                        : index === 3
                        ? "bg-4"
                        : ""
                    }`}
                  >
                    <ul className="event-list">
                      <li>
                        <i className="flaticon-time"></i>
                        {event.time}
                      </li>
                      <li>
                        <i className="flaticon-placeholder"></i>
                        {event.location}
                      </li>
                    </ul>
                    <h3>
                      <Link href="schedule">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
