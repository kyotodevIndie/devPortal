import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ServicePageStepSectionProps {
  steps: string[];
}

export default function ServicePageStepSection({
  steps,
}: ServicePageStepSectionProps) {
  return (
    <Stack
      align={"flex-start"}
      justifyContent={"center"}
      spacing={5}
      bg={"yellow"}
      h={"30vh"}
      p={10}
    >
      <Text color={"primaryText"} fontWeight={700} fontSize={"3xl"}>
        Pré requisitos para utilizada
      </Text>
      {steps.map((step: string) => (
        <Text color={"gray.50"} fontWeight={400} fontSize={"md"} key={step}>
          {step}
        </Text>
      ))}
    </Stack>
  );
}

const steps = [
  "1. Chave Pix cadastrada no Banco do Nordeste;",
  "2. Exclusivo para pessoa jurídica.",
];
