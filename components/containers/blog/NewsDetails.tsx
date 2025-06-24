import Link from "next/link";
import Image from "next/image";
import NewsSidebar from "./NewsSidebar";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import one from "@/public/images/news/post-4.jpg";
import two from "@/public/images/news/post-5.jpg";

const NewsDetails = () => {
  return (
    <section className="blog-wrapper section-padding">
      <div className="container">
        <div className="news-area">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details border-wrap mt-0">
                <div className="single-blog-post post-details mt-0">
                  <div className="post-content pt-0">
                    <h2 className="mt-0">
                      THE CHANGING FACE OF ACCOUNTS PAYABLE SYSTEM.
                    </h2>
                    <div className="post-meta mt-3">
                      <span>
                        <i className="fal fa-user"></i>Shikhon .Ha
                      </span>
                      <span>
                        <i className="fal fa-comments"></i>15 Comments
                      </span>
                      <span>
                        <i className="fal fa-calendar-alt"></i>4th February 2024
                      </span>
                    </div>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing, from how it
                      works to how it compares to digital marketing. Plus, get
                      insight into the benefits and risks of performance
                      marketing and how it can affect your company&apos;s
                      long-term success and profitability.
                    </p>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing, from how it
                      works to how it compares to digital marketing. Plus, get
                      insight into the benefits and risks of performance
                      marketing and how it can affect your company&apos;s
                      long-term success and profitability.
                    </p>
                    <Image
                      src={one}
                      alt="blog__img"
                      className="single-post-image"
                    />
                    <h2>
                      You Should Experience Agency At Least Once In Your
                      Lifetime And Here&apos;s Why.
                    </h2>
                    <p className="mt-2">
                      Performance marketing is an approach to digital marketing
                      or advertising where businesses only pay when a specific
                      result occurs. This result could be a new lead, sale, or
                      other outcome agreed upon by the advertiser and business.
                      Performance marketing involves channels such as affiliate
                      marketing, online advertising.
                    </p>
                    <blockquote>
                      Diam luctus nostra dapibus varius et semper semper rutrum
                      ad risus felis eros. Cursus libero viverra tempus netus
                      diam vestibulum
                    </blockquote>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing
                    </p>
                    <ul className="checked-list mb-4">
                      <li>Cooking is love made visible</li>
                      <li>We&apos;re an open book</li>
                      <li>100% goes to the field</li>
                      <li>Received the highest grades</li>
                    </ul>
                    <h4>Easy & Most Powerful Server Platform.</h4>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing, from how it
                      works to how it compares to digital marketing. Plus, get
                      insight into the benefits and risks of performance
                      marketing and how it can affect your company&apos;s
                      long-term success and profitability.
                    </p>
                    <Image className="alignleft" src={two} alt="blog__img" />
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing
                    </p>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing
                    </p>
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-8 col-12">
                    <h4>Releted Tags</h4>
                    <div className="tagcloud">
                      <Link href="news-details">Building</Link>
                      <Link href="news-details">Factory</Link>
                      <Link href="news-details">Construction</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                    <h4>Social Share</h4>
                    <div className="social-share">
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-section-wrap pt-40">
                  <div className="comments-heading">
                    <h3>03 Comments</h3>
                  </div>
                  <Comments />
                </div>
                <CommentForm />
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

export default NewsDetails;
