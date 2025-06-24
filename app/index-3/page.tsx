import Header from "@/components/layout/header/Header";
import HeroSectionThree from "@/components/layout/banner/HeroSectionThree";
import EventAttend from "@/components/containers/EventAttend";
import EventSectionThree from "@/components/containers/EventSectionThree";
import SpeakerTwo from "@/components/containers/SpeakerTwo";
import TestimonialThree from "@/components/containers/TestimonialThree";
import BrandThree from "@/components/containers/BrandThree";
import MarqueeSectionThree from "@/components/containers/MarqueeSectionThree";
import GallerySectionTwo from "@/components/containers/GallerySectionTwo";
import CounterSectionThree from "@/components/containers/CounterSectionThree";
import PricingPlanThree from "@/components/containers/PricingPlanThree";
import RegisterSection from "@/components/containers/RegisterSection";
import FaqFour from "@/components/containers/FaqFour";
import NewsSectionFour from "@/components/containers/NewsSectionFour";
import CtaFour from "@/components/containers/CtaFour";
import FooterThree from "@/components/layout/footer/FooterThree";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header layout="three" />
      <HeroSectionThree />
      <EventAttend />
      <EventSectionThree />
      <SpeakerTwo />
      <TestimonialThree />
      <BrandThree />
      <MarqueeSectionThree />
      <GallerySectionTwo />
      <CounterSectionThree />
      <PricingPlanThree />
      <RegisterSection />
      <FaqFour />
      <NewsSectionFour />
      <CtaFour />
      <FooterThree />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
