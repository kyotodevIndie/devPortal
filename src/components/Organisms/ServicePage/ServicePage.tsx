import { Box, Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar/NavBar";
import ServicePageStepSection from "../ServicePageStepSection";
import ServicePageResourcesSection from "../ServicePageResourcesSection/ServicePageResourcesSection";
import ServicePageSecuritySection from "../ServicePageSecuritySection/ServicePageSecuritySection";
import Footer from "../Footer/Footer";
import ServicePageInfoSection from "../ServicePageInfoSection/ServicePageInfoSection";
import ServicePageHero from "../ServicePageHero/ServicePageHero";

export default function ServicePage({
  resources,
  steps,
  processes,
  infos,
  heroInfos,
}: any) {
  return (
    <Box>
      <NavBar />
      <ServicePageHero heroInfos={heroInfos} />
      <ServicePageInfoSection infos={infos} />
      <ServicePageResourcesSection resources={resources} />
      <ServicePageSecuritySection processes={processes} />
      <ServicePageStepSection steps={steps} />
      <Footer />
    </Box>
  );
}
