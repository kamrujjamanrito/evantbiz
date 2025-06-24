"use client";
import { useState } from "react";
import Image from "next/image";
import YoutubeEmbed from "../YoutubeEmbed";
import shape from "@/public/images/cta/circle-shape.png";
import shapeText from "@/public/images/cta/text.png";

const VideoSectionTwo = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <div
        className="vedio-bg-section fix bg-cover"
        style={{ backgroundImage: "url(images/cta/video-bg.jpg)" }}
      >
        <div className="vedio-wrapper">
          <div className="video">
            <div className="circle-shape">
              <Image src={shape} alt="Image" />
              <a
                className="video-btn ripple video-popup"
                onClick={() => setVideoActive(true)}
              >
                <i className="fas fa-play"></i>
              </a>
              <div className="circle-image">
                <Image src={shapeText} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default VideoSectionTwo;
