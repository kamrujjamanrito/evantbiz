import HeaderTwo from "@/components/layout/header/HeaderTwo";
import HeroSectionTwo from "@/components/layout/banner/HeroSectionTwo";
import BusinessSection from "@/components/containers/BusinessSection";
import VideoSectionThree from "@/components/containers/VideoSectionThree";
import EventSectionTwo from "@/components/containers/EventSectionTwo";
import FeatureSection from "@/components/containers/FeatureSection";
import TeamSectionTwo from "@/components/containers/TeamSectionTwo";
import MarqueeSectionThree from "@/components/containers/MarqueeSectionThree";
import BrandTwo from "@/components/containers/BrandTwo";
import EventTicket from "@/components/containers/EventTicket";
import TestimonialTwo from "@/components/containers/TestimonialTwo";
import NewsThreeSection from "@/components/containers/NewsThreeSection";
import CtaThree from "@/components/containers/CtaThree";
import ContactSectionTwo from "@/components/containers/ContactSectionTwo";
import InstagramFeed from "@/components/containers/InstagramFeed";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <HeaderTwo />
      <HeroSectionTwo />
      <BusinessSection />
      <VideoSectionThree />
      <EventSectionTwo />
      <FeatureSection layout="two" />
      <TeamSectionTwo />
      <MarqueeSectionThree />
      <BrandTwo />
      <EventTicket />
      <TestimonialTwo />
      <NewsThreeSection />
      <CtaThree />
      <ContactSectionTwo />
      <InstagramFeed />
      <FooterTwo />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
