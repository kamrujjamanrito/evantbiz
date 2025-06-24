import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import EventVenue from "@/components/containers/EventVenue";
import EventAttend from "@/components/containers/EventAttend";
import CtaOne from "@/components/containers/CtaOne";
import Footer from "@/components/layout/footer/Footer";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Event Venue" />
      <EventVenue />
      <EventAttend layout="two" />
      <CtaOne />
      <Footer />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
