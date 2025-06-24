"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TeamData from "@/public/data/team-data";
import shape from "@/public/images/team/shape-2.png";

const TeamSection = () => {
  const nameRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    TeamData.forEach((_, index) => {
      const nameEl = nameRefs.current[index];
      const imageEl = imageRefs.current[index];

      if (!nameEl || !imageEl) return;

      const addHover = () => {
        imageEl.classList.add("hovered");
      };

      const removeHover = (e: MouseEvent) => {
        const toElement = e.relatedTarget as Node | null;
        if (nameEl.contains(toElement) || imageEl.contains(toElement)) {
          return;
        }
        imageEl.classList.remove("hovered");
      };

      nameEl.addEventListener("mouseenter", addHover);
      nameEl.addEventListener("mouseleave", removeHover);
      imageEl.addEventListener("mouseenter", addHover);
      imageEl.addEventListener("mouseleave", removeHover);

      // Cleanup
      return () => {
        nameEl.removeEventListener("mouseenter", addHover);
        nameEl.removeEventListener("mouseleave", removeHover);
        imageEl.removeEventListener("mouseenter", addHover);
        imageEl.removeEventListener("mouseleave", removeHover);
      };
    });
  }, []);

  return (
    <section className="team-section section-padding section-bg fix">
      <div className="container-fluid">
        <div className="section-title-area">
          <div className="section-title text-anim">
            <h2>
              A CONFERENCE FOR BUILDERS LEADING THE <br />
              LATEST INNOVATIONS IN THE AI AND DEVELOPER <br />
              EXPERIENCE ECOSYSTEM.
            </h2>
          </div>
          <div className="shape-image">
            <Image src={shape} alt="Shape" />
          </div>
        </div>

        <div className="team-wrapper">
          <div className="row">
            <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
              <div className="team-content">
                <h3>SPEAKERS</h3>
                <ul className="name-list">
                  {TeamData.map((member, index) => (
                    <li key={member.id}>
                      <Link
                        href={member.link}
                        className="team-title"
                        ref={(el) => {
                          nameRefs.current[index] = el;
                        }}
                      >
                        {member.name}
                      </Link>
                      <span>{member.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="row">
                {TeamData.map((member, index) => (
                  <div
                    key={member.id}
                    className="col-xl-4 col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={member.delay}
                  >
                    <div className="team-card-items">
                      <div
                        className={`team-image ${
                          member.id % 2 === 0 ? "style-2" : ""
                        }`}
                        ref={(el) => {
                          imageRefs.current[index] = el;
                        }}
                      >
                        <Image src={member.image} alt={member.name} />
                        <ul className="social-icon">
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
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default TeamSection;
