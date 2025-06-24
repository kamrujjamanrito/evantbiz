"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import FaqData from "@/public/data/faq-data";

const FaqFour = () => {
  const [activeCommon, setActiveCommon] = useState<number | null>(1);
  const commonsFaqs = FaqData.filter((faq) => faq.category === "common");

  return (
    <section className="faq-section-3 fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-wrapper style-top">
              <div className="faq-content">
                <div className="faq-items">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion2">
                      {commonsFaqs.map((faq) => {
                        const isActive = activeCommon === faq.id;
                        return (
                          <div
                            className="accordion-item style-3 mb-3"
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

export default FaqFour;
