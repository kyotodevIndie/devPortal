import ButtonDefault from "@/components/Atoms/ButtonDefault/ButtonDefault";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Divider,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

interface ServicePageSecuritySectionProps {
  processes: {
    icon: string;
    title: string;
    description: string;
  };
}

export default function ServicePageSecuritySection({ processes }: any) {
  return (
    <Stack
      align={"flex-start"}
      justifyContent={"center"}
      spacing={5}
      bg={"gray.50"}
      h={"75vh"}
    >
      <Box borderTop={"20px solid"} borderTopColor={"orange"} width={"full"} />
      <HStack
      // flexWrap={"wrap"}
      >
        <Stack p={20} width={"65%"}>
          <Image
            src="/assets/icons/lockSecurityIcon.svg"
            width={"40px"}
            mb={4}
          />
          <Text color={"white"} fontWeight={400} fontSize={"3xl"}>
            <strong>Segurança</strong> em primeiro lugar aqui. <br /> Com as
            nossas APIs não seria diferente.
          </Text>
          <ButtonDefault rightIcon={<AiFillCaretRight />} w="150px">
            Saiba mais
          </ButtonDefault>
        </Stack>
        <Divider orientation="vertical" bg={"white"} />
        <VStack
          align={"start"}
          color={"white"}
          fontSize={"md"}
          width={"35%"}
          height={"full"}
        >
          <Text fontSize={"lg"}>
            A API Pix Cobrança adota boas práticas de segurança e atende aos
            requisitos obrigatórios determinados pelo BACEN
          </Text>
          <Stack pl={16} pt={4}>
            {processes.map((process: any) => (
              <VStack align={"start"} key={process.title} py={2} w={"350px"}>
                <HStack>
                  <Image src="/assets/icons/outlineCheckIcon.svg" />
                  <Text fontWeight={600}>{process.title}</Text>
                </HStack>
                <Text pl={7}>{process.description}</Text>
              </VStack>
            ))}
          </Stack>
        </VStack>
      </HStack>
      <Box borderTop={"20px solid"} borderTopColor={"primary"} width={"full"} />
    </Stack>
  );
}

const processes = [
  {
    icon: "",
    title: "Múltiplos níveis de autorização",
    description:
      "ou escopos, segregando as funcionalidades da API de acordo com perfis/permissões dos usuários.",
  },
  {
    icon: "",
    title: "Autenticação via Mutual TLS (mTLS)",
    description: "técnica de autenticação mútua utilizando o protocolo TLS.",
  },
  {
    icon: "",
    title: "Autenticação",
    description:
      "os procesos de cadastro e de configuração de permissões do cliente da API são autenticados pelo o Banco..",
  },
];
