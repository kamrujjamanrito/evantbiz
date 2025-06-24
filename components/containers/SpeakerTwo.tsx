import Image from "next/image";
import Link from "next/link";
import SpeakerTwoData from "@/public/data/speaker-two-data";

const SpeakerTwo = () => {
  return (
    <section className="speaker-section section-padding pt-0 fix">
      <div className="row gx-0 row-cols-sm-2 row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
        {SpeakerTwoData.map((speaker) => (
          <div
            key={speaker.id}
            className="col"
            data-aos="fade-up"
            data-aos-delay={speaker.delay}
          >
            <div className="speaker-card-items">
              <div className="speaker-image">
                <Image src={speaker.image} alt={speaker.title} />
                <div className="social-icon">
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fas fa-basketball-ball"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
                <div className="speaker-content">
                  <span>{speaker.role}</span>
                  <h3>
                    <Link href="speakar-details">{speaker.title}</Link>
                  </h3>
                  <p>{speaker.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakerTwo;
