import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import SpeakerSection from "@/components/containers/speaker/SpeakerSection";
import CtaOne from "@/components/containers/CtaOne";
import Footer from "@/components/layout/footer/Footer";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Our Speakers" />
      <SpeakerSection />
      <CtaOne />
      <Footer />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
