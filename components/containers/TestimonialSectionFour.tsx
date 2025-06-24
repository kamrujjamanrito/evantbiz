"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialFourData from "@/public/data/testimonial-four-data";

const TestimonialSectionFour = () => {
  return (
    <section
      className="testimonial-section-4 fix section-padding"
      style={{ backgroundImage: "url(images/testimonial/home-4-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5"></div>
          <div className="col-xl-7">
            <div className="section-title">
              <h2 className="text-white text-anim">WHAT OUR ATTENDEES SAY</h2>
            </div>
            <div className="testimonial-right-items-4">
              <div className="swiper testimonial-slider-4">
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
                  {TestimonialFourData.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="testimonial-box-items">
                          <div className="icon-box">
                            <div className="icon">
                              <i className="flaticon-quote"></i>
                            </div>
                            <div className="content">
                              <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>
                                <q>{item.content}</q>
                              </p>
                              <div className="client-info">
                                <div className="client-img">
                                  <Image src={item.image} alt="Image" />
                                </div>
                                <div className="client-content">
                                  <h4>{item.name}</h4>
                                  <p>{item.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-dot">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionFour;
