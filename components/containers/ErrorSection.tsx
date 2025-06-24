import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/images/404.png";

const ErrorSection = () => {
  return (
    <section className="error-section fix section-padding">
      <div className="container">
        <div className="error-wrapper">
          <div className="thumb" data-aos="fade-up">
            <Image src={thumb} alt="Image" />
          </div>
          <div className="content">
            <h2 data-aos="fade-up">404-PAGE NOT FOUND.</h2>
            <p data-aos="fade-up" data-aos-delay="300">
              Welcome to the 2024 global innovation summit, where the brightest
              minds and visionary leaders gather to explore the future of
              technology & innovation.
            </p>
            <Link
              href="/"
              className="theme-btn"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Go To Homepage <i className="fas fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
