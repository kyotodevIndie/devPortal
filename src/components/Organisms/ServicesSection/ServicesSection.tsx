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

interface StepsProps {
  description: string;
  icon: ReactElement;
  href: string;
}

const Steps = ({ description, icon, href }: StepsProps) => {
  return (
    <Box w={"full"} p={6}>
      <Stack align={"center"} spacing={2}>
        <Flex
          w={20}
          h={20}
          align={"center"}
          justify={"center"}
          color={"orange"}
          rounded={"full"}
          bg={"primaryDark"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Text mt={1} fontSize={"2xl"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function ServicesSection() {
  return (
    <Box py={20} background={"white"}>
      <Stack
        spacing={4}
        textAlign={"center"}
        align={"center"}
        color={"primaryText"}
      >
        <Heading fontSize={"5xl"} fontWeight={"700"}>
          Como acessar nossos serviços
        </Heading>
        <Box width={"2xl"}>
          <Text fontSize={"2xl"}>A sua solução a apenas 3 passos de você</Text>
        </Box>
      </Stack>

      <Container maxW={"10xl"} mt={12}>
        <Flex justify={"center"} flexDir={"column"} align={"center"}>
          <Flex gridGap={6} justify="center" mb={12}>
            <Steps
              icon={<Icon as={SiPix} w={10} h={10} />}
              description={`1. Realize seu cadastro/login no Portal do Desenvolvedor.`}
              href={"#"}
            />
            <Steps
              icon={<Icon as={SiPix} w={10} h={10} />}
              description={"2. Escolha a API que será utilizada."}
              href={"#"}
            />
            <Steps
              icon={<Icon as={SiPix} w={10} h={10} />}
              description={"3. Aprenda sobre a API e faça testes no Sandbox."}
              href={"#"}
            />
          </Flex>
          <ButtonDefault
            rightIcon={<AiFillCaretRight />}
            bg={"primaryDark"}
            w={"15vw"}
          >
            Vamos Começar
          </ButtonDefault>
        </Flex>
      </Container>
    </Box>
  );
}
