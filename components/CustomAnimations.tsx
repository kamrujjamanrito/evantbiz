"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const CustomAnimations = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // split text animation
      const textElements = document.querySelectorAll<HTMLElement>(".text-anim");
      textElements.forEach((element) => {
        const split = new SplitType(element, { types: "words,chars" });

        gsap.from(split.chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

      // parallax image animation
      const imageContainers = gsap.utils.toArray<HTMLElement>(".image-pllx");
      imageContainers.forEach((container) => {
        const image = container.querySelector("img");
        if (!image) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              scrub: true,
              pin: false,
            },
          })
          .from(image, {
            yPercent: -22,
            scale: 1.1,
            ease: "none",
          })
          .to(image, {
            yPercent: 22,
            scale: 1.1,
            ease: "none",
          });
      });

      // slide up animation
      const slideUpCtas = gsap.utils.toArray<HTMLElement>(".asslideupcta");
      slideUpCtas.forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              scrub: 1,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          })
          .set(el, { transformOrigin: "center center" })
          .fromTo(
            el,
            { opacity: 1, y: "+=300" },
            { opacity: 1, y: 0, duration: 1, immediateRender: false }
          );
      });

      // rotate and transform animation
      const agnChoose5imgEl =
        document.querySelector<HTMLElement>(".agn-choose-5-img");
      if (agnChoose5imgEl) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: agnChoose5imgEl,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
              markers: false,
            },
            defaults: {
              ease: "power2.out",
              duration: 0.4,
            },
          })
          .from(agnChoose5imgEl, {
            transformOrigin: "bottom left",
            rotate: 62,
            x: -152,
            y: 86,
          });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  useEffect(() => {
    const targets = [".img-custom-anim-left", ".img-custom-anim-right"];

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animatec");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const observedElements: HTMLElement[] = [];

    targets.forEach((selector) => {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      elements.forEach((el) => {
        observer.observe(el);
        observedElements.push(el);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default CustomAnimations;
