"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventTicketData from "@/public/data/event-ticket";

const EventTicket = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(() =>
    EventTicketData.reduce((acc, ticket) => {
      acc[ticket.id] = 1;
      return acc;
    }, {} as Record<number, number>)
  );

  const increment = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const onChangeQuantity = (id: number, value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1) {
      setQuantities((prev) => ({
        ...prev,
        [id]: num,
      }));
    }
  };

  return (
    <section className="event-ticket-section-11 section-padding fix">
      <div className="container">
        <div className="event-ticket-wrapper">
          <div className="section-title-area">
            <div className="section-title">
              <h2 className="text-anim">GET YOUR EVENT TICKET</h2>
            </div>
            <p data-aos="fade-up" data-aos-delay="500">
              A wide range of desktop publishing tools and web design editors
              now feature <br /> dummy text as their primary example content.
            </p>
          </div>

          <div className="row">
            <div className="col-xl-12">
              {EventTicketData.map((ticket, idx) => (
                <div
                  key={ticket.id}
                  className={`event-ticket-item${
                    idx === 1 ? " style-2" : idx === 2 ? " style-3" : ""
                  }`}
                  data-aos-delay={ticket.delay}
                >
                  <div className="mask-image">
                    <Image src={ticket.image} alt={`Ticket ${ticket.id}`} />
                  </div>

                  <div className="content">
                    <h3>
                      <Link href="schedule">{ticket.title}</Link>
                    </h3>
                    <p>All prices exclude 15% VAT</p>
                    <h2>
                      ${ticket.price}
                      <span>/per person</span>
                    </h2>
                  </div>

                  <div className="price">
                    <h5 className="text-white text-center mb-3">QUANTITY</h5>
                    <div className="price-quantity text-center">
                      <div className="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 text-sm">
                        <button
                          type="button"
                          className="quantityDecrement"
                          onClick={() => decrement(ticket.id)}
                        >
                          <i className="fal fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="quantityValue"
                          value={quantities[ticket.id]}
                          onChange={(e) =>
                            onChangeQuantity(ticket.id, e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="quantityIncrement"
                          onClick={() => increment(ticket.id)}
                        >
                          <i className="fal fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <h3>
                      <Link href="schedule">SUBTOTAL:</Link>
                    </h3>
                    <h2 className="style-2">
                      ${ticket.price * quantities[ticket.id]}
                    </h2>
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
              ))}
            </div>
          </div>

          <div
            className="cta-wrapper-2 bg-cover"
            style={{ backgroundImage: "url(images/cta/cta-bg-2.jpg)" }}
          >
            <div className="cta-image" data-aos="fade-up" data-aos-delay="300">
              <Image
                src="/images/cta/Frame.png"
                alt="Image"
                width={300}
                height={200}
              />
            </div>
            <div
              className="cta-content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3>SUBSCRIBE AS A NEWSLETTER</h3>
              <div className="search-widget">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email address"
                />
                <button type="submit" className="icon">
                  <i className="far fa-long-arrow-right"></i>
                </button>
              </div>
              <p>No worries, we won&apos;t spam your inbox</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTicket;
