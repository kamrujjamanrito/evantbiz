"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/feature/02.jpg";
import two from "@/public/images/feature/01.jpg";

interface FeatureProps {
  layout?: "one" | "two";
}

const FeatureSection = ({ layout = "one" }: FeatureProps) => {
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
      className={`ferature-conference-section section-padding fix${
        layout === "two" ? " pt-0" : " "
      }`}
    >
      <div className="container">
        <div className="feature-conference-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-conference-content">
                <div className="section-title">
                  <h2 className="text-anim">
                    THE BIGGEST LARGEST WIDEST ANTICIPATED BUSINESS CONFERENCE.
                  </h2>
                  <p
                    className="mt-4 mt-mb-0"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Welcome to the 2024 global innovation summit, where the
                    brightest minds and visionary leaders gather to explore the
                    future of technology & innovation. join us for three days of
                    insightful talks, interactive workshops, and unparalleled
                    networking.
                  </p>
                </div>
                <div className="coming-soon-timer mb-0">
                  <div
                    className="timer-content"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3 id="day">{timer.days}</h3>
                    <p>Days</p>
                  </div>
                  <div
                    className="timer-content style-2"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h3 id="hour">{timer.hours}</h3>
                    <p>Hours</p>
                  </div>
                  <div
                    className="timer-content style-3"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <h3 id="min">{timer.minutes}</h3>
                    <p>Minutes</p>
                  </div>
                  <div
                    className="timer-content style-4"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <h3 id="sec">{timer.seconds}</h3>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-conference-image">
                <Image src={one} alt="img" className="img-custom-anim-right" />
                <div className="feature-conference-image-2 img-custom-anim-left">
                  <Image src={two} alt="Image" />
                </div>
                <Link href="contact" className="circle-box">
                  <span>
                    <span className="icon">
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                    Get a Ticket
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
