"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import GalleryThreeData from "@/public/data/gallery-three-data";

const GallerySectionTwo = () => {
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

  return (
    <section className="event-section section-padding fix">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h2 className="text-anim">IMAGE GALLERY OF EVENT</h2>
        </div>
        <div className="row gallery2-wrap">
          {GalleryThreeData.map((col) => (
            <div
              key={col.column}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={col.delay}
            >
              {col.items.map((item, index) => (
                <div
                  className={`event-card-item ${index > 0 ? "mt-0 mt-4" : ""}`}
                  key={item.id}
                >
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

export default GallerySectionTwo;
