import Image from "next/image";
import BrandTwoData from "@/public/data/brand-two-data";
import shape from "@/public/images/brand/shape-1.png";

const BrandTwo = () => {
  return (
    <section className="brand-section section-padding fix">
      <div className="shape">
        <Image src={shape} alt="Image" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">OUR PARTNERS</h2>
          <p className="mt-3 mt-mb-0" data-aos="fade-up" data-aos-delay="500">
            A wide range of desktop publishing tools and web design editors now
            feature dummy <br /> text as their primary example content. If you
            look up dummy text.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="brand-main-item style-3">
              <div className="brand-item">
                {BrandTwoData.slice(0, 5).map((brand) => (
                  <div
                    key={brand.id}
                    className="brand-image"
                    data-aos="fade-up"
                    data-aos-delay={brand.delay}
                  >
                    <Image src={brand.image} alt={brand.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-10">
            <div className="brand-main-item style-3">
              <div className="brand-item">
                {BrandTwoData.slice(5).map((brand) => (
                  <div
                    key={brand.id}
                    className="brand-image style-3"
                    data-aos="fade-up"
                    data-aos-delay={brand.delay}
                  >
                    <Image src={brand.image} alt={brand.alt} />
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

export default BrandTwo;
