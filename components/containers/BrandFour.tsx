import Image from "next/image";
import Link from "next/link";
import BrandFourData from "@/public/data/brand-four-data";

const BrandFour = () => {
  return (
    <section className="brand-section fix section-padding">
      <div className="container custom-container">
        <div className="section-title">
          <h2 className="text-center text-anim">
            PARTNERS WHO <br /> COLLABORATE WITH US
          </h2>
        </div>
        <div className="row">
          {BrandFourData.map(({ id, images, delay }) => (
            <div
              key={id}
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              {images.map(({ src, alt, styleBorder }, idx) => (
                <div
                  key={idx}
                  className={`brand-image-4${
                    styleBorder ? " style-border" : ""
                  }`}
                >
                  <Image src={src} alt={alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="sponsor-button text-center mt-5">
          <Link
            href="sponsor"
            className="theme-btn bg-new style-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Become A Sponsor <i className="fas fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandFour;
