import Link from "next/link";
import Image from "next/image";
import NewsSidebar from "./NewsSidebar";
import NewsData from "@/public/data/news-data";

const NewsSection = () => {
  return (
    <section className="blog-wrapper section-padding">
      <div className="container">
        <div className="news-area">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts">
                {NewsData.slice(0, 3).map((item) => {
                  return (
                    <div
                      className="single-blog-post"
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                      key={item.id}
                    >
                      <div className="post-featured-thumb bg-cover">
                        <Link href={`${item.destination}`}>
                          <Image src={item.image} alt="Image" />
                        </Link>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span>
                            <i className="far fa-user"></i>
                            {item.author}
                          </span>
                          <span>
                            <i className="fal fa-comments"></i>Coments (
                            {item.comments})
                          </span>
                          <span>
                            <i className="fal fa-clock"></i>3 min Read
                          </span>
                        </div>
                        <h3>
                          <Link href={`${item.destination}`}>{item.title}</Link>
                        </h3>
                        <p>{item.description}</p>
                        <Link
                          href={`${item.destination}`}
                          className="theme-btn mt-4"
                        >
                          READ DETAILS <i className="far fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
                <div className="single-blog-post quote-post format-quote">
                  <div className="post-content text-white bg-cover">
                    <div className="quote-content">
                      <div className="icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="quote-text">
                        <h2>
                          Excepteur sint occaecat cupida tat non proident, sunt
                          in.
                        </h2>
                        <div className="post-meta">
                          <span>
                            <i className="fal fa-comments"></i>35 Comments
                          </span>
                          <span>
                            <i className="fal fa-calendar-alt"></i>24th March
                            2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-nav-wrap text-center">
                <ul>
                  <li>
                    <Link className="page-numbers" href="/">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      02
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      03
                    </Link>
                  </li>
                  <li className="active">
                    <Link className="page-numbers" href="/">
                      <i className="far fa-long-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
