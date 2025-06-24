"use client";
import Link from "next/link";
import Image from "next/image";
import NewsTwoData from "@/public/data/news-two-data";
import frame from "@/public/images/news/Frame.png";

const NewsTwoSection = () => {
  return (
    <section className="news-section section-padding section-bg fix">
      <div className="right-shape">
        <Image src={frame} alt="Image" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">
            OUR LATEST INSIGHT <br /> FROM NEWS
          </h2>
        </div>
        <div className="row">
          {NewsTwoData.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="news-card-items">
                <div className="news-image image-pllx fix">
                  <Image src={item.image} alt="Image" />
                  <div className="news-content">
                    <ul className="news-meta">
                      <li>
                        <i className="flaticon-calendar"></i>
                        {item.date}
                      </li>
                      <li>{item.category}</li>
                    </ul>
                    <h3>
                      <Link href={item.link}>{item.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTwoSection;
