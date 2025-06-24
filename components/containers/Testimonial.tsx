"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import shape from "@/public/images/testimonial/shape-1.png";
import TestimonialData from "@/public/data/testimonial-data";

const Testimonial = () => {
  return (
    <section className="testimonial-section section-padding pt-0 fix">
      <div className="top-shape">
        <Image src={shape} alt="Image" />
      </div>
      <div className="section-title text-center text-anim">
        <h2>
          WHAT PEOPLE SAY <br /> ABOUT US
        </h2>
      </div>
      <div className="testimonial-wrapper">
        <div className="swiper testimonial-slider">
          <Swiper
            spaceBetween={30}
            speed={2000}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".dot",
              clickable: true,
            }}
            breakpoints={{
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="swiper-wrapper"
          >
            {TestimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="testimonial-main-item">
                    <div className="testimonial-image">
                      <Image src={item.image} alt="Image" />
                    </div>
                    <div className="testimonial-card-item">
                      <div className="testimonial-content">
                        <div className={`icon ${item.iconBg}`}>
                          <i className="flaticon-quote"></i>
                        </div>
                        <p>
                          <q>{item.content}</q>
                        </p>
                        <div className="info-content">
                          <h5>{item.name}</h5>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-dot">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
