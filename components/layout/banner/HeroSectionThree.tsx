"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSectionThree = () => {
  const [timer, setTimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-05T00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const remaining = targetDate - now;

      if (remaining <= 0) {
        clearInterval(countdown);
        setTimer({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        setTimer({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section
      className="hero-section-3 hero-3"
      style={{ backgroundImage: "url(images/hero/hero-bg-3.jpg)" }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="coming-soon-timer">
            <div
              className="timer-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 id="day">{timer.days}</h3>
              <p>Days</p>
            </div>
            <div
              className="timer-content border-2s"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 id="hour">{timer.hours}</h3>
              <p>hrs</p>
            </div>
            <div
              className="timer-content border-3s"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 id="min">{timer.minutes}</h3>
              <p>mins</p>
            </div>
            <div
              className="timer-content border-4s"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h3 id="sec">{timer.seconds}</h3>
              <p>secs</p>
            </div>
          </div>
          <h1 className="text-anim">DIGITAL MARKETING CONFERENCE</h1>
          <div
            className="location-items"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i className="flaticon-placeholder"></i>
            </div>
            <div className="content">
              <h3>23-25 APR 2025</h3>
              <h4>Zhylianska St, 976, Kyiv, LONDON.</h4>
            </div>
          </div>
          <div className="hero-button" data-aos="fade-up" data-aos-delay="700">
            <Link href="sponsor" className="theme-btn style-2">
              Become A Sponsor <i className="fas fa-long-arrow-right"></i>
            </Link>
            <Link href="contact" className="theme-btn">
              Get a Ticket <i className="fas fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionThree;
