import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ServicePageResourcesSectionProps {
  resources: string[];
}

export default function ServicePageResourcesSection({
  resources,
}: ServicePageResourcesSectionProps) {
  return (
    <Stack
      align={"flex-start"}
      justifyContent={"center"}
      spacing={5}
      bg={"gray.50"}
      h={"50vh"}
      p={10}
    >
      <Text color={"white"} fontWeight={400} fontSize={"3xl"} mb={5}>
        O que está disponível para você
      </Text>
      {resources.map((step: string, index: number) => (
        <HStack key={step}>
          <Stack
            bg={"yellow"}
            borderRadius={"full"}
            width={"30px"}
            justify={"center"}
            align={"center"}
            my={2}
            ml={3}
          >
            <Text color={"primary"} fontWeight={800} fontSize={"xl"}>
              {index + 1}
            </Text>
          </Stack>

          <Text color={"white"} fontWeight={400} fontSize={"md"}>
            {step}
          </Text>
        </HStack>
      ))}
    </Stack>
  );
}

const resources = [
  "Gerenciamento de notificações pelo recebedor de Pix associado à cobrança;",
  "Criação ou revisão de cobranças com identificação única;",
  "Verificação da situação de cobranças criadas; ",
  "Consultas agrupadas por situação e período; ",
  "Devolução de pagamentos realizados; ",
];
