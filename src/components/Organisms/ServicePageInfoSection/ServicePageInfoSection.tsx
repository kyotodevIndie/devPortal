import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface ServicePageInfoSectionProps {
  infos: {
    title: string;
    description: string;
    descriptionStrong: string;
  };
}

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      background={"white"}
      w={"350px"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      color={"terciaryText"}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={14}
          h={14}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={"primaryText"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">
            <Text fontSize={"2xl"}>{heading}</Text>
          </Heading>
          <Text mt={4} fontSize={"xs"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function ServicePageInfoSection({
  infos,
}: ServicePageInfoSectionProps) {
  return (
    <Stack
      spacing={10}
      bg={"gray.20"}
      h={"auto"}
      color={"white"}
      p={"45px 40px"}
    >
      <Text color={"terciaryText"} fontWeight={400} fontSize={"5xl"}>
        Já conhece a nossa <strong>{infos.title}</strong>?
      </Text>
      <VStack
        bg={"primaryDark"}
        align={"start"}
        justify={"center"}
        p={10}
        borderRadius={"25px"}
        mx={30}
        fontSize={"xl"}
      >
        <Text>{infos.description}</Text>
        <Text fontWeight={700}>{infos.descriptionStrong}</Text>
      </VStack>
      <Text color={"terciaryText"} fontWeight={400} fontSize={"5xl"}>
        Vantagens do uso da API:
      </Text>
      <Container maxW={"90%"} mt={12} mx={20}>
        <Flex justify={"center"} flexDir={"column"} align={"center"}>
          <Flex flexWrap="wrap" gridGap={6} justify="center" mb={12}>
            <Card
              heading={"Automatização"}
              icon={<Image src="assets/icons/likeIcon.svg" />}
              description={`A API PIX viabiliza o recebimento de cobranças de forma imediata, para por exemplo, pontos de venda em lojas e soluções para comércio eletrônico.`}
              href={"#"}
            />
            <Card
              heading={"Geração de QR Code"}
              icon={<Image src="/assets/icons/likeIcon.svg" />}
              description={
                "O usuário recebedor poderá, via API Pix Cobrança, gera QR Code de cobrança para recebimento de recursos, bem como poderá verificar a liquidação delas dentre outras possibilidades."
              }
              href={"#"}
            />
            <Card
              heading={"Agilidade"}
              icon={<Image src="/assets/icons/likeIcon.svg" />}
              description={
                "Os pagamentos realizados via Pix são processados instantaneamente 24 horas por dia e 7 dias por semana."
              }
              href={"#"}
            />
            <Card
              heading={"Controle"}
              icon={<Image src="/assets/icons/likeIcon.svg" />}
              description={
                "A API PIX viabiliza o recebimento de cobranças de forma imediata, para por exemplo, pontos de venda em lojas e soluções para comércio eletrônico."
              }
              href={"#"}
            />
          </Flex>
        </Flex>
      </Container>
    </Stack>
  );
}

const infos = {
  title: "API PIX",
  description: `O Pix pode ser utilizado 24 horas por dia, todos os dias do ano. Basta que o usuário tenha acesso à internet no momento da transação. E, além de transferir valores, com o Pix também é possível fazer pagamentos a estabelecimentos.`,
  descriptionStrong:
    "Qualquer negócio representado por uma Pessoa Jurídica que possua chave PIX cadastrada no BNB faz parte do nosso público alvo.",
  cards: [
    {
      icon: "",
      title: "Automatização",
      description:
        "a API Pix Cobrança é o elemento final para que o usuário recebedor possa automatizar sua interação com o Banco do Nordeste do Brasil, a fim de receber e gerenciar transações Pix.",
    },
    {
      icon: "",
      title: "Geração de QR Code",
      description:
        "a API Pix Cobrança é o elemento final para que o usuário recebedor possa automatizar sua interação com o Banco do Nordeste do Brasil, a fim de receber e gerenciar transações Pix.",
    },
    {
      icon: "",
      title: "Agilidade",
      description:
        "a API Pix Cobrança é o elemento final para que o usuário recebedor possa automatizar sua interação com o Banco do Nordeste do Brasil, a fim de receber e gerenciar transações Pix.",
    },
    {
      icon: "",
      title: "Controle",
      description:
        "a API Pix Cobrança é o elemento final para que o usuário recebedor possa automatizar sua interação com o Banco do Nordeste do Brasil, a fim de receber e gerenciar transações Pix.",
    },
  ],
};
