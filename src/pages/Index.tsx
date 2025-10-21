import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Device from "@/components/Device";
import Plans from "@/components/Plans";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Device />
      <Plans />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
