"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import FaqData from "@/public/data/faq-data";
import one from "@/public/images/faq/faq-1.png";

interface FaqProps {
  layout?: "one" | "two";
}

const FaqTwoSection = ({ layout = "one" }: FaqProps) => {
  const [activeCommon, setActiveCommon] = useState<number | null>(1);
  const commonsFaqs = FaqData.filter((faq) => faq.category === "common");

  return (
    <section
      className={`faq-section section-padding fix${
        layout === "two" ? " pt-0" : " "
      }`}
    >
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="faq-image agn-choose-5-img fix">
                <Image src={one} alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <h2 className="text-anim">
                    FREQUENTLY ASKED <br /> QUESTIONS ABOUT US
                  </h2>
                </div>
                <div className="faq-items mt-4 mt-mb-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion2">
                      {commonsFaqs.map((faq) => {
                        const isActive = activeCommon === faq.id;
                        return (
                          <div
                            className="accordion-item mb-3"
                            data-aos="fade-up"
                            data-aos-delay={faq.delay}
                            key={faq.id}
                          >
                            <h5 className="accordion-header">
                              <button
                                className={`accordion-button ${
                                  isActive ? "" : "collapsed"
                                }`}
                                onClick={() =>
                                  setActiveCommon(isActive ? null : faq.id)
                                }
                              >
                                {faq.id}. {faq.question}
                              </button>
                            </h5>
                            <AnimateHeight
                              duration={400}
                              height={isActive ? "auto" : 0}
                            >
                              <div
                                className={`accordion-collapse collapse ${
                                  isActive ? "show" : ""
                                }`}
                              >
                                <div className="accordion-body">
                                  {faq.answer}
                                </div>
                              </div>
                            </AnimateHeight>
                          </div>
                        );
                      })}
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

export default FaqTwoSection;
