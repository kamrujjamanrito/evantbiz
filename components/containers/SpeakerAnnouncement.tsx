"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import man from "@/public/images/man.png";

const SpeakerAnnouncement = () => {
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
      className="speakar-announce-section pb-0 section-padding bg-cover"
      style={{ backgroundImage: "url(images/speakar-announce-bg.jpg)" }}
    >
      <div className="container">
        <div className="speakar-announce-wrapper">
          <div className="announce-content">
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
            <h2 className="text-anim">
              NEVER MISS ANOTHER SPEAKER ANNOUNCEMENT
            </h2>
            <div
              className="announce-button"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Link href="sponsor" className="theme-btn style-2">
                Become A Sponsor <i className="fas fa-long-arrow-right"></i>
              </Link>
              <Link href="contact" className="theme-btn">
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-newsletter-4 section-padding pb-0">
        <div className="container">
          <div className="cta-newsletter-wrapper-4">
            <div className="newsletter-content">
              <h3 className="text-anim">SUBSCRIBE AS A NEWSLETTER</h3>
              <form
                action="#"
                className="search-widget"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <input
                  type="email"
                  id="email00"
                  placeholder="Enter Your Email address"
                />
                <button type="submit" className="icon-btn">
                  <i className="fas fa-long-arrow-right"></i>
                </button>
              </form>
              <p className="text-white" data-aos="fade-up" data-aos-delay="700">
                No worries, we won&apos;t spam your inbox
              </p>
            </div>
            <div className="man-image" data-aos="fade-up" data-aos-delay="400">
              <Image src={man} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerAnnouncement;
