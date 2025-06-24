import Link from "next/link";
import Image from "next/image";
import NewsFiveData from "@/public/data/news-five-data";

const NewsSectionFive = () => {
  return (
    <section className="news-section-4 section-padding">
      <div className="container">
        <div className="news-wrapper-4">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="news-content-left sticky-style">
                <div className="section-title mb-0">
                  <h2 className="text-anim">OUR LATEST INSIGHT FROM NEWS</h2>
                </div>
                <p className="mt-2" data-aos="fade-up" data-aos-delay="500">
                  Welcome to the 2024 global innovation summit, where the
                  brightest minds and visionary leaders gather to explore the
                  future of technology & innovation.
                </p>
                <Link
                  href="news"
                  className="theme-btn"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  View All News <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="news-right-items">
                {NewsFiveData.map((item) => (
                  <div
                    key={item.id}
                    className="news-box-items-4"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    <div className="news-image">
                      <Image src={item.image} alt="News Image" />
                      <div className="post-date">
                        <h2>
                          {item.day}
                          <span>{item.month}</span>
                        </h2>
                      </div>
                    </div>
                    <div className="news-content">
                      <ul className="news-meta">
                        <li>
                          <i className="flaticon-calendar"></i>
                          {item.comments}
                        </li>
                        <li>{item.category}</li>
                      </ul>
                      <h3>
                        <Link href={item.link}>{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionFive;
