"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialThreeData from "@/public/data/testimonial-three-data";
import one from "@/public/images/testimonial/info.png";
import two from "@/public/images/testimonial/logo.png";

const TestimonialThree = () => {
  return (
    <section className="testimonial-section-3 section-padding pt-0 fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title text-anim">
            <h2>
              WHAT PEOPLE SAY <br /> ABOUT EvantBiz
            </h2>
          </div>
          <div
            className="top-client-items"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="client-info">
              <Image src={one} alt="Info" />
              <p>
                <b>35k+</b> People Already Registries on Events
              </p>
            </div>
            <Image src={two} alt="Logo" />
          </div>
        </div>

        <div className="swiper testimonial-slider-3">
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
              1199: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 2,
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
            {TestimonialThreeData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-box-3">
                  <div className="icon-items">
                    <div className="icon">
                      <i className="flaticon-quote"></i>
                    </div>
                    <div className="star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="client-items">
                    <div className="client-left">
                      <div className="thumb">
                        <Image src={item.image} alt={item.name} />
                      </div>
                      <div className="content">
                        <h5>{item.name}</h5>
                        <span>{item.role}</span>
                      </div>
                    </div>
                    <p>
                      <q>{item.message}</q>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-dot">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
