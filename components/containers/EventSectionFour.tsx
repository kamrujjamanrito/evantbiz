"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventScheduleFourData from "@/public/data/event-schedule-four-data";

const EventSectionFour = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const firstDayItems = EventScheduleFourData[0].items;
  const secondDayItems = EventScheduleFourData[1].items;
  const thirdDayItems = EventScheduleFourData[2].items;

  return (
    <section
      className="event-shedule-section-4 fix section-padding bg-cover"
      style={{ backgroundImage: "url(images/event/bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title">
          <h2 className="text-center text-white text-anim">EVENT SCHEDULES?</h2>
        </div>
        <div className="event-shedule-wrapper-4">
          <div className="row">
            <div className="col-xxl-1">
              <ul className="nav" role="tablist">
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  role="presentation"
                >
                  <a
                    className={`nav-link ${
                      activeTabIndex === 0 ? "active" : " "
                    }`}
                    onClick={() => handleTabClick(0)}
                  >
                    DAY 01
                    <span>January 28, 2025</span>
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  role="presentation"
                >
                  <a
                    className={`nav-link ${
                      activeTabIndex === 1 ? "active" : " "
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    DAY 02
                    <span>January 28, 2025</span>
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  role="presentation"
                >
                  <a
                    className={`nav-link ${
                      activeTabIndex === 2 ? "active" : " "
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    DAY 03
                    <span>January 28, 2025</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-11">
              <div
                className="tab-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  id="thumb1"
                  className={`tab-pane fade ${
                    activeTabIndex === 0 ? "show active" : ""
                  }`}
                >
                  <div className="col-xl-11">
                    {firstDayItems.map((item) => (
                      <div key={item.id} className="event-main-item-4">
                        <div className="event-image">
                          <Image src={item.image} alt="Event" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href={item.link}>{item.title}</Link>
                          </h3>
                          <p>{item.description}</p>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.speakers.map((speaker, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image src={speaker.image} alt="Client" />
                                  </div>
                                  <div className="text">
                                    <h6>{speaker.name}</h6>
                                    <p>{speaker.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  id="thumb2"
                  className={`tab-pane fade ${
                    activeTabIndex === 1 ? "show active" : ""
                  }`}
                >
                  <div className="col-xl-11">
                    {secondDayItems.map((item) => (
                      <div key={item.id} className="event-main-item-4">
                        <div className="event-image">
                          <Image src={item.image} alt="Event" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href={item.link}>{item.title}</Link>
                          </h3>
                          <p>{item.description}</p>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.speakers.map((speaker, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image src={speaker.image} alt="Client" />
                                  </div>
                                  <div className="text">
                                    <h6>{speaker.name}</h6>
                                    <p>{speaker.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  id="thumb3"
                  className={`tab-pane fade ${
                    activeTabIndex === 2 ? "show active" : ""
                  }`}
                >
                  <div className="col-xl-11">
                    {thirdDayItems.map((item) => (
                      <div key={item.id} className="event-main-item-4">
                        <div className="event-image">
                          <Image src={item.image} alt="Event" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href={item.link}>{item.title}</Link>
                          </h3>
                          <p>{item.description}</p>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.speakers.map((speaker, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image src={speaker.image} alt="Client" />
                                  </div>
                                  <div className="text">
                                    <h6>{speaker.name}</h6>
                                    <p>{speaker.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default EventSectionFour;
