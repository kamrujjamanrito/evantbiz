import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import NewsDetails from "@/components/containers/blog/NewsDetails";
import CtaOne from "@/components/containers/CtaOne";
import Footer from "@/components/layout/footer/Footer";
import CustomAnimations from "@/components/CustomAnimations";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="News Details" />
      <NewsDetails />
      <CtaOne />
      <Footer />
      <CustomAnimations />
      <ScrollToTop />
    </>
  );
};

export default page;
