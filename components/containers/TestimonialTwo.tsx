"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialTwoData from "@/public/data/testimonial-two-data";
import one from "@/public/images/testimonial/shape-1.png";
import two from "@/public/images/testimonial/Frame.png";
import three from "@/public/images/testimonial/shape-2.png";

const TestimonialTwo = () => {
  return (
    <section className="testimonial-section-2 section-padding pt-0 fix">
      <div className="top-shape">
        <Image src={one} alt="Image" />
      </div>
      <div className="left-shape">
        <Image src={two} alt="Image" />
      </div>
      <div className="right-shape">
        <Image src={three} alt="Image" />
      </div>
      <div className="container">
        <div className="section-title text-center text-anim">
          <h2>
            WHAT PEOPLE SAY <br /> ABOUT EvantBiz
          </h2>
        </div>
        <div className="testimonial-wrapper-2">
          <div className="swiper testimonial-slider-2">
            <Swiper
              spaceBetween={30}
              speed={2000}
              loop={true}
              roundLengths={true}
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".array-prev",
                prevEl: ".array-next",
              }}
              breakpoints={{
                991: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className="swiper-wrapper"
            >
              {TestimonialTwoData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="client-info">
                          <div className="client-image">
                            <Image src={item.clientImage} alt="Image" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-quote"></i>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            <q>{item.text}</q>
                          </p>
                          <div className="info-text">
                            <div className="star">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <h5>{item.name}</h5>
                            <span>{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="array-buttons">
            <button className="array-prev">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
