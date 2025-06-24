import Link from "next/link";
import Image from "next/image";
import TeamTwoData from "@/public/data/team-two-data";

const TeamSectionTwo = () => {
  return (
    <section
      className="speaker-section- section-padding fix bg-cover"
      style={{ backgroundImage: "url(/images/speakar/speakar-bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title text-center text-anim">
          <h2 className="text-white">
            OUR AMAZING & LEARNED <br /> EVENT SPEAKRS
          </h2>
        </div>
        <div className="row">
          {TeamTwoData.map((speaker) => (
            <div
              key={speaker.id}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={speaker.delay}
            >
              <div className="speakar-card-item">
                <div className="speakar-image">
                  <Image src={speaker.image} alt={speaker.name} />
                  <div className="glow-shape">
                    <Image
                      src="/images/speakar/glow-shape.png"
                      alt="Glow Shape"
                      width={100}
                      height={100}
                    />
                  </div>
                  <ul className="speakar-social">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fas fa-basketball-ball"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="speakar-content">
                  <h3>
                    <Link href="speakar-details">{speaker.name}</Link>
                  </h3>
                  <p>{speaker.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionTwo;
