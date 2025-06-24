import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/avatar.png";

const ContactSectionTwo = () => {
  return (
    <section className="contact-section fix">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="map-items">
                <div className="googpemap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                    style={{ border: "0px" }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    GET DIRECTION OF THE CONFERENCE HALL
                  </h2>
                  <p className="mt-3" data-aos="fade-up" data-aos-delay="500">
                    A wide range of desktop publishing tools and web design
                    editors now feature dummy text as their primary example
                    content if you look up. Welcome to the 2024 global
                    innovation summit, where the brightest minds and visionary
                    leaders gather to explore the future of technology &
                    innovation.
                  </p>
                  <div
                    className="contact-list"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <ul className="list">
                      <li>
                        <i className="flaticon-calendar"></i>
                        23-25 APR 2025
                      </li>
                      <li>
                        <i className="flaticon-time"></i>
                        09:AM-10;00PM
                      </li>
                    </ul>
                    <ul className="list">
                      <li>
                        <i className="flaticon-placeholder"></i>
                        Zhylianska St, 976, Kyiv, Ukraine.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="contact-button"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Link href="contact" className="theme-btn">
                      Get a Ticket <i className="fas fa-long-arrow-right"></i>
                    </Link>
                    <div className="client-info">
                      <Image src={one} alt="Image" />
                      <h6>
                        <span>35k+</span> People Already <br /> Registries on
                        Events
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionTwo;
