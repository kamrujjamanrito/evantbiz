import Link from "next/link";
import Image from "next/image";
import NewsFourData from "@/public/data/news-four-data";

interface NewsProps {
  layout?: "one" | "two";
}

const NewsSectionFour = ({ layout = "one" }: NewsProps) => {
  return (
    <section
      className={`news-section section-padding fix${
        layout === "two" ? " pt-0" : " "
      }`}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">
            OUR LATEST INSIGHT <br /> FROM NEWS
          </h2>
        </div>
        <div className="row">
          {NewsFourData.map((news) => (
            <div
              key={news.id}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={news.delay}
            >
              <div className="news-card-items style-3">
                <div className="news-image image-pllx fix">
                  <Image src={news.image} alt="Image" />
                  <div className="post-date">
                    <h2>
                      {news.date}
                      <span>{news.month}</span>
                    </h2>
                  </div>
                  <div className="news-content">
                    <ul className="news-meta">
                      <li>
                        <i className="flaticon-calendar"></i>
                        {news.metaDate}
                      </li>
                      <li>{news.category}</li>
                    </ul>
                    <h3>
                      <Link href={news.link}>{news.title}</Link>
                    </h3>
                    <Link href={news.link} className="link-btn">
                      Read More <i className="fas fa-long-arrow-right"></i>
                    </Link>
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

export default NewsSectionFour;
