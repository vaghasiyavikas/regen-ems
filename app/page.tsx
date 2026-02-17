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
        <div className="px-4 md:px-16 lg:px-12">
          <AsSeenIn />
          <SmartMuscleCarousel />
          <ProductShowcase />
          <TechSpecs />
        </div>
          <WhyRegenEMS />
          <FeaturedIn />
          <Reviews />
      </main>
      <div className="bg-[#bd42f4] py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-white text-2xl font-bold">
          ☞ Backed By The Regeneration Man &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☞ Backed By The Regeneration Man &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☞ Backed By The Regeneration Man &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☞ Backed By The Regeneration Man
        </div>
      </div>
      <Footer />
    </div>
  );
}
