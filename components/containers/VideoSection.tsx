"use client";
import { useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import Image from "next/image";
import one from "@/public/images/cta/vedio-1.png";
import two from "@/public/images/cta/vedio-2.jpg";
import three from "@/public/images/cta/video-3.png";
import four from "@/public/images/cta/shape-1.png";
import five from "@/public/images/cta/shape-2.png";
import six from "@/public/images/cta/video-4.jpg";

const VideoSection = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <section className="video-section section-padding fix">
        <div className="left-image-1 float-bob-x">
          <Image src={one} alt="Image" />
        </div>
        <div className="left-image-2 float-bob-y">
          <Image src={two} alt="Image" />
        </div>
        <div className="right-image float-bob-y">
          <Image src={three} alt="Image" />
        </div>
        <div className="shape-image">
          <Image src={four} alt="Image" />
        </div>
        <div className="top-shape">
          <Image src={five} alt="Image" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">
              JOIN US AT THE FOREFRONT OF INNOVATION <br /> AND COLLABORATION,
              WHERE INDUSTRY <br /> LEADERS AND EXPERTS CONVERGE TO <br /> SHAPE
              THE FUTURE.
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="video-image fix image-pllx"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image src={six} alt="Image" />
                <a
                  className="video-btn ripple video-popup"
                  onClick={() => setVideoActive(true)}
                >
                  <i className="fas fa-play"></i>
                </a>
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

export default VideoSection;
