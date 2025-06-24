import Link from "next/link";
import Image from "next/image";
import BrandThreeData from "@/public/data/brand-three-data";

const BrandThree = () => {
  return (
    <section className="brand-section-3 fix">
      <div className="container">
        <div
          className="brand-wrapper-3 bg-cover section-padding"
          style={{ backgroundImage: "url(images/brand/bg.jpg)" }}
        >
          <div className="section-title text-center">
            <h2 className="text-white text-anim" data-aos-delay="300">
              OUR PARTNERS
            </h2>
            <p
              className="text-white pt-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              A wide range of desktop publishing tools and web design editors
              now feature dummy <br /> text as their primary example content. If
              you look up dummy text.
            </p>
          </div>

          <div className="row justify-content-center">
            {BrandThreeData.map((brand) => (
              <div
                key={brand.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={brand.delay}
              >
                <div className="brand-image">
                  <Image src={brand.image} alt={brand.alt} />
                </div>
              </div>
            ))}
          </div>

          <div
            className="brand-button text-center mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link href="sponsor" className="theme-btn">
              Become a Sponsor <i className="fas fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandThree;
