"use client";
import { useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/about/color-shape.png";
import two from "@/public/images/about/white.png";
import three from "@/public/images/about/about-4.jpg";
import four from "@/public/images/about/about-5.jpg";
import five from "@/public/images/cta/circle-shape.png";
import six from "@/public/images/cta/text.png";

const AboutSection = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <section className="about-section-4 section-padding fix">
        <div className="left-shape float-bob-y">
          <Image src={one} alt="Image" />
        </div>
        <div className="right-shape">
          <Image src={two} alt="Image" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-center text-anim">
              WHY ATTENDED DESIGN <br /> EVENTS OF 2025
            </h2>
            <p className="mt-3 mt-mb-0" data-aos="fade-up" data-aos-delay="500">
              Welcome to the 2024 global innovation summit, where the brightest{" "}
              <br /> minds and visionary leaders gather to explore the future.
            </p>
          </div>
          <div className="about-wrapper-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-image style-2 image-pllx fix">
                      <Image src={three} alt="Image" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-image">
                      <div className="fix image-pllx">
                        <Image src={four} alt="Image" />
                      </div>
                      <div className="circle-shape">
                        <Image src={five} alt="Image" />
                        <a
                          onClick={() => setVideoActive(true)}
                          className="video-btn ripple video-popup"
                        >
                          <i className="fas fa-play"></i>
                        </a>
                        <div className="circle-image">
                          <Image src={six} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-content">
                  <h3 data-aos="fade-up" data-aos-delay="300">
                    WELCOME TO EVENU, THE ORIGINAL SOCIAL ENTERTAINMENT VENUE!
                    GET READY TO GET PLAYFUL, AND CREATE MEMORIES AROUND THE
                    TABLE.
                  </h3>
                  <p data-aos="fade-up" data-aos-delay="500">
                    A wide range of desktop publishing tools and web design
                    editors now feature dummy text as their primary example
                    content. If you look up dummy text, you&apos;ll find many
                    sites that are still in the early stages of development.
                  </p>
                  <Link
                    href="contact"
                    className="theme-btn"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Get a Ticket <i className="fas fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {videoActive && <YoutubeEmbed embedId="cRXm1p-CNyk" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
