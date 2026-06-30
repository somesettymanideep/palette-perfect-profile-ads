import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EcommerceListingSection from "@/components/EcommerceListingSection";
// import SocialMediaSection from "@/components/SocialMediaSection";
import SocialMediaPortfolioSection from "@/components/SocialMediaPortfolioSection";
import SeoSection from "@/components/SeoSection";
import SeoPortfolioSection from "@/components/SeoPortfolioSection";
import GoogleAdsSection from "@/components/GoogleAdsSection";
import GoogleAdsPortfolioSection from "@/components/GoogleAdsPortfolioSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContentCreationSection from "@/components/ContentCreationSection";
import CaseStudySection from "@/components/CaseStudySection";
import IndustriesSection from "@/components/IndustriesSection";
import ClientsSection from "@/components/ClientsSection";
import GrowthSection from "@/components/GrowthSection";
import ThankYouSection from "@/components/ThankYouSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && (
        <SplashScreen
          isVisible={showSplash}
          onComplete={() => {
            setShowSplash(false);
            setSplashDone(true);
          }}
        />
      )}
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <EcommerceListingSection />
      <PortfolioSection />
      <ContentCreationSection />
      {/* <SocialMediaSection /> */}
      <SocialMediaPortfolioSection />
      <SeoSection />
      <SeoPortfolioSection />
      <GoogleAdsSection />
      <GoogleAdsPortfolioSection />
      <CaseStudySection />
      <IndustriesSection />
      <ClientsSection />
      <WorkTogetherSection />
      <GrowthSection />
      <ThankYouSection />
      <ScrollToTop />
    </>
  );
};

export default Index;
