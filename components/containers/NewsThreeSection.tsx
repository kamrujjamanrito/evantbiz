"use client";
import Image from "next/image";
import Link from "next/link";
import NewsThreeData from "@/public/data/news-three-data";
import one from "@/public/images/news/star.png";
import two from "@/public/images/news/shape-1.png";

const NewsThreeSection = () => {
  return (
    <section className="news-section-2 marque-bg section-padding fix">
      <div className="left-shape">
        <Image src={one} alt="Image" />
      </div>
      <div className="right-shape">
        <Image src={two} alt="Image" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title text-anim">
            <h2>
              OUR LATEST INSIGHT <br /> FROM NEWS
            </h2>
          </div>
          <Link
            href="news"
            className="theme-btn theme-btn-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            View All News <i className="fas fa-long-arrow-right"></i>
          </Link>
        </div>

        <div className="row">
          {NewsThreeData.map((item) => (
            <div
              key={item.id}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="news-card-items-2">
                <div className="news-image">
                  <Image src={item.image} alt={`News ${item.id}`} />
                </div>
                <div className="news-content">
                  <ul className="news-meta">
                    <li>
                      <i className="far fa-calendar-minus"></i>
                      {item.date}
                    </li>
                    <li>{item.category}</li>
                  </ul>
                  <h3>
                    <Link href="news-details">{item.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsThreeSection;
