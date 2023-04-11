import { Stack, Flex, Text, VStack, Box } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"95vh"}
      backgroundImage={"/assets/images/hero.svg"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        align={"flex-start"}
        px={20}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Box background={"orange"} width={"200px"} height={"2vh"} mb={"20px"} />

        <Stack align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            fontSize={"7xl"}
            lineHeight={"100px"}
          >
            Portal do <br />
            desenvolvedor BNB
          </Text>
        </Stack>
        <Stack align={"flex-start"} spacing={6}>
          <Text color={"white"} fontWeight={400} fontSize={"3xl"}>
            Soluções para implementar as nossas APIs na sua empresa
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
