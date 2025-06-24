import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/images/hero/hero-image.png";

const HeroSectionTwo = () => {
  return (
    <section
      className="hero-section hero-2 fix bg-cover"
      style={{ backgroundImage: "url(images/hero/hero-bg-2.jpg)" }}
    >
      <div className="container-fluid">
        <Link
          href="contact"
          className="circle-box"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span>
            <span className="icon">
              <i className="fas fa-long-arrow-right"></i>
            </span>
            Get a Ticket
          </span>
        </Link>
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <span data-aos="fade-up" data-aos-delay="300">
                EMPOWER 2025:
              </span>
              <h1 data-aos="fade-up" data-aos-delay="500">
                BUSINESS VISION UNLEASHED
              </h1>
              <ul className="hero-meta" data-aos="fade-up" data-aos-delay="300">
                <li>
                  <i className="flaticon-calendar"></i>
                  23-25 APR 2025
                </li>
                <li>
                  <i className="flaticon-placeholder"></i>
                  5th Street, 21st Floor, NY, USa
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
