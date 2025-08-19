import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularSkills from "@/components/PopularSkills";
import TopInstructors from "@/components/TopInstructors";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PopularSkills />
        <TopInstructors />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
