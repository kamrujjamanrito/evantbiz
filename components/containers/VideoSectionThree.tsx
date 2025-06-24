"use client";
import { useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";

const VideoSectionThree = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div className="vedio-bg-section-2 fix">
        <div className="container-fluid">
          <div
            className="vedio-wrapper-2 image-pllx fix bg-cover"
            style={{ backgroundImage: "url(images/cta/video-bg-2.jpg)" }}
          >
            <div className="video">
              <a
                onClick={() => setVideoActive(true)}
                className="video-btn ripple video-popup"
              >
                <i className="fas fa-play"></i>
              </a>
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

export default VideoSectionThree;
