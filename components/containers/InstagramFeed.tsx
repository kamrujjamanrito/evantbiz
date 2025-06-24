"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import InstagramFeedData from "@/public/data/insta-feed";

const InstagramFeed = () => {
  return (
    <div className="instagram-banner fix section-padding pb-0">
      <div className="instagram-wrapper">
        <div className="swiper instagram-banner-slider">
          <Swiper
            spaceBetween={20}
            speed={2000}
            loop={true}
            roundLengths={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1399: {
                slidesPerView: 12,
              },
              1199: {
                slidesPerView: 8,
              },
              991: {
                slidesPerView: 6,
              },
              767: {
                slidesPerView: 4,
              },
              650: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper-wrapper"
          >
            {InstagramFeedData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="instagram-banner-items">
                      <div className="banner-image">
                        <Image src={item.image} alt={item.alt} />
                        <Link href={item.link} className="icon">
                          <i className="fas fa-eye"></i>
                        </Link>
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
  );
};

export default InstagramFeed;
