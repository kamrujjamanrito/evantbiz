"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GalleryTwoData from "@/public/data/gallery-two-data";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const GallerySection = () => {
  const [imageDimensions, setImageDimensions] = useState<
    Record<number, { width: number; height: number }>
  >({});

  const handleImageLoad = (id: number, width: number, height: number) => {
    setImageDimensions((prev) => ({
      ...prev,
      [id]: { width, height },
    }));
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".gallery2-wrap",
      children: "a",
      mouseMovePan: true,
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  const grouped = [0, 1, 2].map((col) =>
    GalleryTwoData.slice(col * 2, col * 2 + 2)
  );

  const delays = [300, 500, 700];

  return (
    <section className="event-section section-padding fix">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h2 className="text-anim">IMAGE GALLERY OF EVENT</h2>
        </div>
        <div className="row gallery2-wrap">
          {grouped.map((column, colIndex) => (
            <div
              key={colIndex}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={delays[colIndex]}
            >
              {column.map((item) => (
                <div className="event-card-item" key={item.id}>
                  <div className={`event-image ${item.extraClass || ""}`}>
                    <Link
                      href={item.image.src}
                      className="img-popup2"
                      data-pswp-width={imageDimensions[item.id]?.width || 300}
                      data-pswp-height={imageDimensions[item.id]?.height || 300}
                      data-pswp-src={item.image.src}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={imageDimensions[item.id]?.width || 300}
                        height={imageDimensions[item.id]?.height || 300}
                        onLoad={(e) =>
                          handleImageLoad(
                            item.id,
                            (e.target as HTMLImageElement).naturalWidth,
                            (e.target as HTMLImageElement).naturalHeight
                          )
                        }
                      />
                      <div className="icon">
                        <i className="fas fa-eye"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
