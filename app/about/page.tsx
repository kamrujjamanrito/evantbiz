import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import EventAttend from "@/components/containers/EventAttend";
import Brand from "@/components/containers/Brand";
import TeamSectionTwo from "@/components/containers/TeamSectionTwo";
import FeatureSection from "@/components/containers/FeatureSection";
import NewsSectionFour from "@/components/containers/NewsSectionFour";
import FaqTwoSection from "@/components/containers/FaqTwoSection";
import CtaOne from "@/components/containers/CtaOne";
import Footer from "@/components/layout/footer/Footer";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="About Us" />
      <EventAttend />
      <Brand layout="two" />
      <TeamSectionTwo />
      <FeatureSection />
      <NewsSectionFour layout="two" />
      <FaqTwoSection layout="two" />
      <CtaOne />
      <Footer />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
