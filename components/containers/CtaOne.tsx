import Image from "next/image";
import shapeOne from "@/public/images/cta/cta-shape.png";
import shapeTwo from "@/public/images/cta/cta-image.png";

interface CtaProps {
  layout?: "one" | "two";
}

const CtaOne = ({ layout = "one" }: CtaProps) => {
  return (
    <section
      className={`cta-section${layout === "two" ? " style-cta-1" : " fix"}`}
    >
      <div className="container">
        <div className="cta-wrapper">
          <div className="shape-image">
            <Image src={shapeOne} alt="Image" />
          </div>
          <div className="cta-image">
            <Image src={shapeTwo} alt="Image" />
          </div>
          <div className="cta-item">
            <h2 className="text-anim">
              SUBSCRIBE AS A <br /> NEWSLETTER
            </h2>
            <div
              className="search-widget"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email address"
              />
              <button type="submit" className="theme-btn">
                Subscribe <i className="fas fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
