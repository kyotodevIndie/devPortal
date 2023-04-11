import ButtonDefault from "@/components/Atoms/ButtonDefault/ButtonDefault";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { AiFillCaretRight } from "react-icons/ai";

import { SiPix } from "react-icons/si";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      background={"white"}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"primary"}
          rounded={"full"}
          bg={"gray.100"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <ButtonDefault rightIcon={<AiFillCaretRight />}>
          Acesse aqui
        </ButtonDefault>
      </Stack>
    </Box>
  );
};

export default function ServicesJumbotron() {
  return (
    <Box py={20} background={"primary"}>
      <Stack spacing={4} textAlign={"center"} align={"center"}>
        <Heading fontSize={"6xl"} fontWeight={"bold"} color={"secondaryText"}>
          Conheça nossos serviços de APIs
        </Heading>
        <Box width={"2xl"}>
          <Text color={"white"} fontSize={"2xl"}>
            Acesse a documentação disponível e escolha a melhor solução para o
            seu negócio
          </Text>
        </Box>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex justify={"center"} flexDir={"column"} align={"center"}>
          <Flex flexWrap="wrap" gridGap={6} justify="center" mb={12}>
            <Card
              heading={"Pix"}
              icon={<Icon as={SiPix} w={10} h={10} />}
              description={`A API PIX viabiliza o recebimento de cobranças de forma imediata, para por exemplo, pontos de venda em lojas e soluções para comércio eletrônico.`}
              href={"#"}
            />
            <Card
              heading={"Open Finance"}
              icon={<Icon as={SiPix} w={10} h={10} />}
              description={
                "A API PIX viabiliza o recebimento de cobranças de forma imediata, para por exemplo, pontos de venda em lojas e soluções para comércio eletrônico."
              }
              href={"#"}
            />
            <Card
              heading={"Corporativo"}
              icon={<Icon as={SiPix} w={10} h={10} />}
              description={
                "A API PIX viabiliza o recebimento de cobranças de forma imediata, para por exemplo, pontos de venda em lojas e soluções para comércio eletrônico."
              }
              href={"#"}
            />
          </Flex>
          <ButtonDefault
            rightIcon={<AiFillCaretRight />}
            bg={"primaryDark"}
            w={"15vw"}
          >
            Acessar Catálogo
          </ButtonDefault>
        </Flex>
      </Container>
    </Box>
  );
}
