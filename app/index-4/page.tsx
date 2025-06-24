import HeaderTwo from "@/components/layout/header/HeaderTwo";
import HeroSectionFour from "@/components/layout/banner/HeroSectionFour";
import MarqueeSectionTwo from "@/components/containers/MarqueeSectionTwo";
import AboutSection from "@/components/containers/AboutSection";
import BrandFour from "@/components/containers/BrandFour";
import EventSectionFour from "@/components/containers/EventSectionFour";
import TeamSectionFour from "@/components/containers/TeamSectionFour";
import VideoSectionFour from "@/components/containers/VideoSectionFour";
import PricingPlanFour from "@/components/containers/PricingPlanFour";
import TestimonialSectionFour from "@/components/containers/TestimonialSectionFour";
import GallerySection from "@/components/containers/GallerySection";
import SpeakerAnnouncement from "@/components/containers/SpeakerAnnouncement";
import NewsSectionFive from "@/components/containers/NewsSectionFive";
import GoogleMap from "@/components/containers/GoogleMap";
import FooterFour from "@/components/layout/footer/FooterFour";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <HeaderTwo layout="four" />
      <HeroSectionFour />
      <MarqueeSectionTwo />
      <AboutSection />
      <BrandFour />
      <EventSectionFour />
      <TeamSectionFour />
      <VideoSectionFour />
      <PricingPlanFour />
      <TestimonialSectionFour />
      <GallerySection />
      <SpeakerAnnouncement />
      <NewsSectionFive />
      <GoogleMap />
      <FooterFour />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
