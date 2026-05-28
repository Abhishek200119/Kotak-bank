import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import CardShowcase from "../components/CardShowcase";
import AppPreview from "../components/AppPreview";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <CardShowcase />
      <AppPreview />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;