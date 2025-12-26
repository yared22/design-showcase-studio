import HeroSection from "@/components/portfolio/HeroSection";
import IntroSection from "@/components/portfolio/IntroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ToolsSection from "@/components/portfolio/ToolsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import PortfolioContentsSection from "@/components/portfolio/PortfolioContentsSection";
import ThankYouSection from "@/components/portfolio/ThankYouSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ToolsSection />
      <ExperienceSection />
      <PortfolioContentsSection />
      <ThankYouSection />
    </main>
  );
};

export default Index;
