"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventScheduleThreeData from "@/public/data/event-schedule-three-data";

const EventSectionThree = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const firstDayItems = EventScheduleThreeData[0].items;
  const secondDayItems = EventScheduleThreeData[1].items;
  const thirdDayItems = EventScheduleThreeData[2].items;
  const fourthDayItems = EventScheduleThreeData[3].items;

  return (
    <section className="event-schedul-3 fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">EVENT SCHEDULES?</h2>
        </div>
        <div className="event-schedul-wrapper-3">
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
              {firstDayItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`event-schedul-items ${
                    index === 2 ? "active" : ""
                  }`}
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={item.image} alt={item.speakerName} />
                      </div>
                      <div className="content">
                        <h6>{item.speakerName}</h6>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i> {item.time}
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
                        <Link href="/schedule">{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                    </div>
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
              {secondDayItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`event-schedul-items ${
                    index === 2 ? "active" : ""
                  }`}
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={item.image} alt={item.speakerName} />
                      </div>
                      <div className="content">
                        <h6>{item.speakerName}</h6>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i> {item.time}
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
                        <Link href="/schedule">{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                    </div>
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
              {thirdDayItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`event-schedul-items ${
                    index === 2 ? "active" : ""
                  }`}
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={item.image} alt={item.speakerName} />
                      </div>
                      <div className="content">
                        <h6>{item.speakerName}</h6>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i> {item.time}
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
                        <Link href="/schedule">{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              id="thumb4"
              className={`tab-pane fade ${
                activeTabIndex === 3 ? "show active" : ""
              }`}
            >
              {fourthDayItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`event-schedul-items ${
                    index === 2 ? "active" : ""
                  }`}
                >
                  <div className="event-schedul-left">
                    <div className="client-info">
                      <div className="thumb">
                        <Image src={item.image} alt={item.speakerName} />
                      </div>
                      <div className="content">
                        <h6>{item.speakerName}</h6>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    <span>
                      <i className="far fa-clock"></i> {item.time}
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
                        <Link href="/schedule">{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                    </div>
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

export default EventSectionThree;
