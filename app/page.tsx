import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <ContactForm />
      <Footer />
    </main>
  );
}
