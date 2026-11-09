import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { DJSection } from "@/components/DJSection";
import { LocationSection } from "@/components/LocationSection";
import {
  About,
  MetricStrip,
  StepList,
  CommunityMosaic,
} from "@/components/Sections";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <MetricStrip />
        <CommunityMosaic />
        <StepList />
        <DJSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
