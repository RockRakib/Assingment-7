import AboutUs from "@/components/AboutUs";

import Footer from "@/components/Footer";
import Gallary from "@/components/Gallary/Gallary";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonials/Testimonial";
import Navbar from "@/components/header/Navbar";
import HeroSection from "@/components/heroSection/HeroSection";
import SupplyCard from "@/components/suppplyCard/SupplyCard";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <SupplyCard />
      <Testimonial />
      <Gallary />
      <AboutUs />

      <Team />
      <Footer />
    </div>
  );
};

export default MainLayout;
