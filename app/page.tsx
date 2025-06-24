import Header from "@/components/layout/header/Header";
import HeroSection from "@/components/layout/banner/HeroSection";
import MarqueeSection from "@/components/containers/MarqueeSection";
import VideoSection from "@/components/containers/VideoSection";
import Brand from "@/components/containers/Brand";
import TeamSection from "@/components/containers/TeamSection";
import EventSection from "@/components/containers/EventSection";
import PricingPlanTwo from "@/components/containers/PricingPlanTwo";
import Testimonial from "@/components/containers/Testimonial";
import CounterSection from "@/components/containers/CounterSection";
import VideoSectionTwo from "@/components/containers/VideoSectionTwo";
import GallerySection from "@/components/containers/GallerySection";
import MarqueeSectionTwo from "@/components/containers/MarqueeSectionTwo";
import NewsTwoSection from "@/components/containers/NewsTwoSection";
import FaqTwoSection from "@/components/containers/FaqTwoSection";
import CtaOne from "@/components/containers/CtaOne";
import Footer from "@/components/layout/footer/Footer";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MarqueeSection />
      <VideoSection />
      <Brand layout="two" />
      <TeamSection />
      <EventSection />
      <PricingPlanTwo />
      <Testimonial />
      <CounterSection />
      <VideoSectionTwo />
      <GallerySection />
      <MarqueeSectionTwo />
      <NewsTwoSection />
      <FaqTwoSection />
      <CtaOne />
      <Footer />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
