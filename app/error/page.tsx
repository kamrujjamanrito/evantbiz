import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ErrorSection from "@/components/containers/ErrorSection";
import CtaOne from "@/components/containers/CtaOne";
import Footer from "@/components/layout/footer/Footer";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Error 404" />
      <ErrorSection />
      <CtaOne />
      <Footer />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
