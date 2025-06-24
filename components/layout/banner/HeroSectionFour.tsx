import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/hero/client-img.png";
import two from "@/public/images/hero/hero-4.jpg";

const HeroSectionFour = () => {
  return (
    <section className="hero-section hero-4">
      <div className="container-fluid">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="text-anim">DESIGN SUMMIT 2025 CONFERENCE.</h1>
              <div
                className="hero-box-items"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="box-items">
                  <span>
                    20-21TH <br /> OF NOVEMVER
                  </span>
                  <h3>NEW YORK, USA</h3>
                </div>
                <p>
                  Welcome to the 2025 global innovation summit, where the
                  brightest minds and visionary leaders gather to explore the
                  future of technology & innovation.
                </p>
              </div>
              <div
                className="client-info"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="client-img">
                  <Image src={one} alt="Image" />
                </div>
                <p>
                  <b>35k+</b> People <br /> Already Registries <br /> on Events
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img">
              <Image src={two} alt="Image" />
              <div className="box-items float-bob-x">
                <p>BOOKING NOW</p>
                <Link href="contact">
                  <span>
                    GET <br /> TICKETS
                  </span>
                  <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFour;
