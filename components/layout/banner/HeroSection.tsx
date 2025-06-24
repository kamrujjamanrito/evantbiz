import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/hero/shape-1.png";
import two from "@/public/images/hero/shape-2.png";
import three from "@/public/images/hero/shape-4.png";

const HeroSection = () => {
  return (
    <section
      className="hero-section hero-1 fix bg-cover"
      style={{ backgroundImage: "url(images/hero/hero-1.jpg)" }}
    >
      <div className="shape-1 float-bob-y">
        <Image src={one} alt="Image" />
      </div>
      <div className="shape-2 float-bob-y">
        <Image src={two} alt="Image" />
      </div>
      <div className="shape-3">
        <span>LONDON</span>
      </div>
      <div className="shape-4 float-bob-x">
        <Image src={three} alt="Image" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 data-aos="fade-up" data-aos-delay="300">
                EVENT & <br />
                CONFERENCE
              </h1>
            </div>
          </div>
          <div className="hero-bottom">
            <p data-aos="fade-up" data-aos-delay="500">
              17 - 25 October 2025 | las Águedas, 295, 28400 Collado Villalba,
              Burminghum, London
            </p>
            <div className="hero-button">
              <Link
                href="sponsor"
                className="theme-btn style-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Become A Sponsor <i className="fas fa-long-arrow-right"></i>
              </Link>
              <Link
                href="contact"
                className="theme-btn"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get a Ticket <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
