import Hero from "@/components/Organisms/Hero";
import NavBar from "@/components/Organisms/NavBar";
import { Box } from "@chakra-ui/react";
import AboutSection from "@/components/Organisms/AboutSection/AboutSection";
import ServicesJumbotron from "@/components/Organisms/ServicesJumbotron/ServicesJumbotron";
import ServicesSection from "@/components/Organisms/ServicesSection/ServicesSection";
import Footer from "@/components/Organisms/Footer/Footer";
import InfoJumbotron from "@/components/Organisms/InfoJumbotron/InfoJumbotron";
import SecurityJumbotron from "@/components/Organisms/SecurityJumbotron/SecurityJumbotron";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Hero /> {/* Ajustar responisividade*/}
      <AboutSection />
      <ServicesJumbotron /> {/* Ajustar responisividade*/}
      <ServicesSection /> {/* Ajustar responisividade*/}
      <SecurityJumbotron /> {/* Ajustar responisividade*/}
      <InfoJumbotron />
      <Footer />
    </Box>
  );
}
