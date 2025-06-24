"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PricingPlanTwoData from "@/public/data/pricing-plan-two-data";

const PricingPlanTwo = () => {
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
      className="event-perticipate-section section-padding fix bg-cover"
      style={{ backgroundImage: "url(/images/event/event-bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="text-white text-anim">
              HOW TO PARTICIPATE <br /> TO OUR EVENTS?
            </h2>
            <p
              className="text-white mt-3 mt-mb-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Register now to take advantage of early-bird <br /> passes before
              they&apos;re gone.
            </p>
          </div>
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
        </div>

        <div className="event-wrapper">
          <div className="row">
            {PricingPlanTwoData.map((plan) => (
              <div
                key={plan.id}
                className={`col-xl-4 col-lg-6 col-md-6`}
                data-aos="fade-up"
                data-aos-delay={plan.delay}
              >
                <div className={plan.cardClass}>
                  {plan.shapes?.map((shape, idx) => (
                    <div key={idx} className={shape.className}>
                      <Image
                        src={shape.src}
                        alt="Image"
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                  <div className="pricing-header">
                    <h3>{plan.title}</h3>
                    <p>{plan.note}</p>
                    <h2>
                      {plan.price}
                      <span>/per person</span>
                    </h2>
                    <h6>{plan.includedTitle}</h6>
                    <ul className="pricing-list">
                      {plan.features.map((item, idx) => (
                        <li
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                    <div className="pricing-button">
                      <Link
                        href={plan.link.href}
                        className={plan.link.btnClass}
                      >
                        {plan.link.text}{" "}
                        <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanTwo;
