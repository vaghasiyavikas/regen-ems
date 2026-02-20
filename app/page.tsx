import dynamic from 'next/dynamic';
import LazySection from './components/LazySection';

const Header = dynamic(() => import('./components/Header'));
const HeroSection = dynamic(() => import('./components/HeroSection'));
const AsSeenIn = dynamic(() => import('./components/AsSeenIn'));
const SmartMuscleCarousel = dynamic(() => import('./components/SmartMuscleCarousel'));
const ProductShowcase = dynamic(() => import('./components/ProductShowcase'));
const TechSpecs = dynamic(() => import('./components/TechSpecs'));
const WhyRegenEMS = dynamic(() => import('./components/WhyRegenEMS'));
const FeaturedIn = dynamic(() => import('./components/FeaturedIn'));
const Reviews = dynamic(() => import('./components/Reviews'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main style={{ padding: 0, maxWidth: '100%' }}>
        <LazySection>
          <HeroSection />
        </LazySection>
        <div className="px-4 md:px-16 lg:px-12">
          <LazySection>
            <AsSeenIn />
          </LazySection>
          <LazySection>
            <SmartMuscleCarousel />
          </LazySection>
          <LazySection>
            <ProductShowcase />
          </LazySection>
          <LazySection>
            <TechSpecs />
          </LazySection>
        </div>
        <LazySection>
          <WhyRegenEMS />
        </LazySection>
        <LazySection>
          <FeaturedIn />
        </LazySection>
        <LazySection>
          <Reviews />
        </LazySection>
      </main>
      <LazySection>
        <div className="bg-[#bd42f4] py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-white text-2xl font-bold">
            ☞ Backed By The Regeneration Man &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☞ Backed By The Regeneration Man &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☞ Backed By The Regeneration Man &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☞ Backed By The Regeneration Man
          </div>
        </div>
      </LazySection>
      <Footer />
    </div>
  );
}
