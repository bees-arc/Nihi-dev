import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import WhyNihi from "@/components/WhyNihi";
import FacultyGrid from "@/components/FacultyGrid";
import AdvisorSection from "@/components/AdvisorSection";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProgramsSection />
      <WhyNihi />
      <FacultyGrid compact />
      <AdvisorSection />
      <Testimonials />
      <CTABand />
    </main>
  );
}
