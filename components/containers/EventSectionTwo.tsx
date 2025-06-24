"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventScheduleTwoData from "@/public/data/event-schedule-two-data";

const EventSectionTwo = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const firstDayItems = EventScheduleTwoData[0].items;
  const secondDayItems = EventScheduleTwoData[1].items;
  const thirdDayItems = EventScheduleTwoData[2].items;
  const fourthDayItems = EventScheduleTwoData[3].items;

  return (
    <section className="event-shedule-section-2 fix section-padding">
      <div className="container">
        <div className="section-title mb-0">
          <h2 className="text-center text-anim">EVENT SCHEDULES?</h2>
        </div>
        <div className="event-shedule-wrapper-2">
          <ul className="nav">
            <li className="nav-item" data-aos="fade-up" data-aos-delay="200">
              <a
                className={`nav-link ${activeTabIndex === 0 ? "active" : " "}`}
                onClick={() => handleTabClick(0)}
              >
                DAY 01
                <span>January 28, 2025</span>
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="400">
              <a
                className={`nav-link ${activeTabIndex === 1 ? "active" : " "}`}
                onClick={() => handleTabClick(1)}
              >
                DAY 02
                <span>January 28, 2025</span>
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="600">
              <a
                className={`nav-link ${activeTabIndex === 2 ? "active" : " "}`}
                onClick={() => handleTabClick(2)}
              >
                DAY 03
                <span>January 28, 2025</span>
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="800">
              <a
                className={`nav-link ${activeTabIndex === 3 ? "active" : " "}`}
                onClick={() => handleTabClick(3)}
              >
                DAY 04
                <span>January 28, 2025</span>
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
              <div className="row">
                <div className="col-xl-12">
                  {firstDayItems.map((item) => {
                    return (
                      <div
                        className={`event-main-item ${item.styles}`}
                        key={item.id}
                      >
                        <div className="event-image">
                          <Image src={item.image} alt="Event Image" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href="/schedule">{item.title}</Link>
                          </h3>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.clients.map((client, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image
                                      src={client.image}
                                      alt={client.name}
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>{client.name}</h6>
                                    <p>{client.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              id="thumb2"
              className={`tab-pane fade ${
                activeTabIndex === 1 ? "show active" : ""
              }`}
            >
              <div className="row">
                <div className="col-xl-12">
                  {secondDayItems.map((item) => {
                    return (
                      <div
                        className={`event-main-item ${item.styles}`}
                        key={item.id}
                      >
                        <div className="event-image">
                          <Image src={item.image} alt="Event Image" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href="/schedule">{item.title}</Link>
                          </h3>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.clients.map((client, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image
                                      src={client.image}
                                      alt={client.name}
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>{client.name}</h6>
                                    <p>{client.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              id="thumb3"
              className={`tab-pane fade ${
                activeTabIndex === 2 ? "show active" : ""
              }`}
            >
              <div className="row">
                <div className="col-xl-12">
                  {thirdDayItems.map((item) => {
                    return (
                      <div
                        className={`event-main-item ${item.styles}`}
                        key={item.id}
                      >
                        <div className="event-image">
                          <Image src={item.image} alt="Event Image" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href="/schedule">{item.title}</Link>
                          </h3>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.clients.map((client, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image
                                      src={client.image}
                                      alt={client.name}
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>{client.name}</h6>
                                    <p>{client.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              id="thumb4"
              className={`tab-pane fade ${
                activeTabIndex === 3 ? "show active" : ""
              }`}
            >
              <div className="row">
                <div className="col-xl-12">
                  {fourthDayItems.map((item) => {
                    return (
                      <div
                        className={`event-main-item ${item.styles}`}
                        key={item.id}
                      >
                        <div className="event-image">
                          <Image src={item.image} alt="Event Image" />
                          <span className="post">
                            <i className="flaticon-time"></i>
                            {item.time}
                          </span>
                        </div>
                        <div className="event-content">
                          <h3>
                            <Link href="/schedule">{item.title}</Link>
                          </h3>
                          <div className="client-info-item">
                            <div className="client-info">
                              {item.clients.map((client, index) => (
                                <div className="info-item" key={index}>
                                  <div className="info-image">
                                    <Image
                                      src={client.image}
                                      alt={client.name}
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>{client.name}</h6>
                                    <p>{client.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSectionTwo;
