import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ButtonDefault from "@/components/Atoms/ButtonDefault/ButtonDefault";

interface ServicePageHeroProps {
  heroInfos: {
    title: string;
    version: string;
    description: string;
    tags: string[];
  };
}

export default function ServicePageHero({ heroInfos }: ServicePageHeroProps) {
  return (
    <Box bg={"primary"} h={"90vh"}>
      <Flex
        w={"full"}
        h={"50vh"}
        backgroundImage={"/assets/images/pixHero.svg"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      />
      <HStack justify={"space-between"} align={"center"}>
        <VStack
          w={"full"}
          // h={"30vh"}
          justify={"center"}
          align={"flex-start"}
          px={20}
          py={28}
        >
          <Text
            color={"white"}
            fontWeight={700}
            fontSize={"7xl"}
            lineHeight={"100px"}
          >
            Pix BNB
          </Text>
          <Stack align={"flex-start"} spacing={6}>
            <Text color={"white"} fontWeight={400} fontSize={"3xl"}>
              Transferências e pagamentos de forma prática e rápida.
            </Text>
          </Stack>
          <Box
            background={"orange"}
            width={"200px"}
            height={"5px"}
            mt={"20px"}
          />
        </VStack>
        <VStack
          align={"start"}
          position={"absolute"}
          right={20}
          top={"90px"}
          zIndex={"2"}
        >
          <VStack align={"start"} p={"40px"}>
            <Text fontSize={"xl"} color={"white"}>
              Palavras-chave:
            </Text>
            <HStack color={"terciaryText"} fontSize={"xs"}>
              {heroInfos.tags.map((tag: string) => (
                <Text
                  key={tag}
                  bg={"gray.20"}
                  p={"5px 10px"}
                  borderRadius={"4px"}
                >
                  {tag}
                </Text>
              ))}
            </HStack>
          </VStack>
          <VStack
            bg={"white"}
            w={"400px"}
            h={"560px"}
            align={"center"}
            borderRadius={"25px"}
            color={"terciaryText"}
          >
            <Text
              p={"15px 100px"}
              color={"white"}
              bg={"primaryText"}
              fontSize={"3xl"}
            >
              API
            </Text>
            <Text fontSize={"5xl"}>{heroInfos.title}</Text>
            <Text fontSize={"xl"}>versão: {heroInfos.version}</Text>
            <Image src="/assets/icons/tradeIcon.svg" />
            <Text p={"20px"}>{heroInfos.description}</Text>
            <ButtonDefault>Acesse aqui</ButtonDefault>
            <Text>Documentação</Text>
          </VStack>
        </VStack>
        <Box position={"absolute"} right={"200px"} top={"500px"}>
          <Image src="/assets/images/detailCard.svg" />
        </Box>
      </HStack>
    </Box>
  );
}

const heroInfos = {
  title: "PIX",
  version: "1.0.41",
  description:
    " A solução API Pix Cobrança possibilita a geração dinâmica de QR Codes dinâmicos para iniciação de pagamentos e verificação de liquidações dos mesmos pelos lojistas e fornecedores (usuários recebedores).",
};
