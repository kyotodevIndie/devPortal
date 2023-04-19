import ButtonDefault from "@/components/Atoms/ButtonDefault/ButtonDefault";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { AiFillCaretRight } from "react-icons/ai";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      w={"250px"}
      border="1px solid"
      borderColor={"gray.50"}
      borderRadius="lg"
      overflow="hidden"
      p={6}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          my={2}
        >
          {icon}
        </Flex>
        <Box textAlign={"center"}>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>
            {heading}
          </Heading>
          <Text mt={1} fontSize={"lg"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function SecurityJumbotron() {
  return (
    <Box py={20} background={"yellow"}>
      <Stack spacing={4} textAlign={"center"} align={"center"}>
        <Heading fontSize={"6xl"} fontWeight={"bold"} color={"terciaryText"}>
          Segurança com as nossas APIs
        </Heading>
        <Box width={"auto"}>
          <Text color={"primary"} fontSize={"3xl"}>
            Ambiente exclusivo para gerenciar suas soluções
          </Text>
        </Box>
        <Box px={10} py={1} bg={"primary"} mt={2} borderRadius={"5px"}>
          <Text color={"white"} fontSize={"4xl"}>
            Saiba mais sobre a Plataforma Developers BNB
          </Text>
        </Box>
      </Stack>

      <Container maxW={"90%"} mt={12} mx={20}>
        <Flex justify={"center"} flexDir={"column"} align={"center"}>
          <Flex flexWrap="wrap" gridGap={6} justify="center" mb={12}>
            <Card
              heading={"Gratuito"}
              icon={<Image src="/assets/icons/checkIcon.svg" />}
              description={`Lorem Ipsum is simply dummy text of the`}
              href={"#"}
            />
            <Card
              heading={"Seguro"}
              icon={<Image src="/assets/icons/lockIcon.svg" />}
              description={`Lorem Ipsum is simply dummy text of the`}
              href={"#"}
            />
            <Card
              heading={"Estável"}
              icon={<Image src="assets/icons/scaleIcon.svg" />}
              description={`Lorem Ipsum is simply dummy text of the`}
              href={"#"}
            />
            <Card
              heading={"Sandbox"}
              icon={<Image src="/assets/icons/sandboxIcon.svg" />}
              description={`Lorem Ipsum is simply dummy text of the`}
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
