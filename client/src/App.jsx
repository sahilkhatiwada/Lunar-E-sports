import ContactUs from "./components/Contactus";
import CTASection from "./components/Cta";
import DetailSection from "./components/DetailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Home";

import Navbar from "./components/Navbar";
import OrganizerSection from "./components/Organizer";
import RulesSection from "./components/RulesSection";

function App() {
  return (
    <>
    
      <Navbar />
      <HeroSection />
      <DetailSection />
      |<RulesSection />
      <OrganizerSection />
      <CTASection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
