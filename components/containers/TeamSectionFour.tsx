import Link from "next/link";
import Image from "next/image";
import SpeakerData from "@/public/data/speaker-data";

const TeamSectionFour = () => {
  return (
    <section className="team-section-4 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">
            OUR AMAZING & LEARNED
            <br /> EVENT SPEAKRS
          </h2>
        </div>
        <div className="row">
          {SpeakerData.map((speaker) => (
            <div
              key={speaker.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={speaker.delay}
            >
              <div className="team-items">
                <div className="team-img">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={300}
                    height={300}
                  />
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
                </div>
                <div className="team-content">
                  <p>{speaker.title}</p>
                  <h3>
                    <Link href={speaker.link}>{speaker.name}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionFour;
