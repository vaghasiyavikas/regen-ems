import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AsSeenIn from "./components/AsSeenIn";
import SmartMuscleCarousel from "./components/SmartMuscleCarousel";
import ProductShowcase from "./components/ProductShowcase";
import TechSpecs from "./components/TechSpecs";
import WhyRegenEMS from "./components/WhyRegenEMS";
import FeaturedIn from "./components/FeaturedIn";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main style={{ padding: 0, maxWidth: '100%' }}>
        <HeroSection />
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4rem 0 6rem' }}>
          <AsSeenIn />
          <SmartMuscleCarousel />
          <ProductShowcase />
          <TechSpecs />
          <WhyRegenEMS />
          <FeaturedIn />
          <Reviews />
        </div>
      </main>
      <Footer />
    </div>
  );
}
