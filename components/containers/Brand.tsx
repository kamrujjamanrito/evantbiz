"use client";
import Image from "next/image";
import BrandData from "@/public/data/brand-data";

interface BrandProps {
  layout?: "one" | "two";
}

const Brand = ({ layout = "one" }: BrandProps) => {
  const renderBrands = (brands: typeof BrandData.bronze) =>
    brands.map((brand) => (
      <div key={brand.id} className="brand-image">
        <Image src={brand.image} alt={brand.alt} />
      </div>
    ));

  return (
    <section
      className={`brand-section fix section-padding${
        layout === "two" ? " pt-0" : " "
      }`}
    >
      <div className="container custom-container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="brand-main-item style-2">
              <h3 className="text-anim">BRONZE PARTNERS</h3>
              <div
                className="brand-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {renderBrands(BrandData.bronze.slice(0, 3))}
              </div>
              <div
                className="brand-item mb-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {renderBrands(BrandData.bronze.slice(3))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="brand-main-item">
              <h3 className="text-anim">GOLD PARTNERS</h3>
              <div
                className="brand-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {renderBrands(BrandData.gold.slice(0, 3))}
              </div>
              <div
                className="brand-item mb-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {renderBrands(BrandData.gold.slice(3))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
