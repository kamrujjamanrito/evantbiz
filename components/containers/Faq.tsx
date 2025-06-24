"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import FaqData from "@/public/data/faq-data";
import one from "@/public/images/faq/faq-1.png";
import two from "@/public/images/faq/faq-2.png";

const Faq = () => {
  const [activeCommon, setActiveCommon] = useState<number | null>(1);
  const [activeGeneral, setActiveGeneral] = useState<number | null>(5);

  const commonsFaqs = FaqData.filter((faq) => faq.category === "common");
  const generalFaqs = FaqData.filter((faq) => faq.category === "general");

  return (
    <section className="faq-section section-padding fix">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="faq-image">
                <Image src={one} alt="Common FAQs" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <h2>COMMONS FAQS</h2>
                </div>
                <div className="faq-items mt-4 mt-mb-0">
                  <div className="accordion" id="accordionCommon">
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
                              <div className="accordion-body">{faq.answer}</div>
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

        <div className="faq-wrapper section-padding pb-0">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <h2>GENERAL FAQS</h2>
                </div>
                <div className="faq-items mt-4 mt-mb-0">
                  <div className="accordion" id="accordionGeneral">
                    {generalFaqs.map((faq) => {
                      const isActive = activeGeneral === faq.id;
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
                                setActiveGeneral(isActive ? null : faq.id)
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
                              <div className="accordion-body">{faq.answer}</div>
                            </div>
                          </AnimateHeight>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-image style-inner">
                <Image src={two} alt="General FAQs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
