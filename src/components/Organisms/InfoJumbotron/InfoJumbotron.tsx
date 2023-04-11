import ButtonDefault from "@/components/Atoms/ButtonDefault/ButtonDefault";
import { Stack, Flex, Text, HStack, Box } from "@chakra-ui/react";
import { AiFillCaretRight } from "react-icons/ai";

export default function InfoJumbotron() {
  return (
    <Flex w={"full"}>
      <HStack
        w={"full"}
        justify={"center"}
        align={"center"}
        px={20}
        py={10}
        gap={10}
        bgGradient={"linear(to-r, primaryDark, primary)"}
      >
        <Stack align={"flex-start"} spacing={6}>
          <Text color={"white"} fontSize={"4xl"}>
            Explore nossas soluções em APIs
          </Text>
        </Stack>

        <ButtonDefault
          rightIcon={<AiFillCaretRight />}
          bg={"white"}
          color={"primaryText"}
          w={"15vw"}
          fontSize={"md"}
        >
          Cadastre-se
        </ButtonDefault>
      </HStack>
    </Flex>
  );
}
