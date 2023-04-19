import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Stack
      minH={"70vh"}
      direction={{ base: "column", xl: "row", "2xl": "row" }}
      align={{ base: "center", xl: "none", "2xl": "none" }}
    >
      <Flex mx={"20"} flex={1} align={"center"} justify={"flex-start"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Text
            fontSize={"7xl"}
            as={"h2"}
            color={"primaryText"}
            fontWeight={"800"}
          >
            Nossas APIs
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Com mais de 71 anos no mercado, o Banco do Nordeste continua a
            colaborar com inovação e a facilitar a comunicação com os nossos
            parceiros.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              color={"primary"}
              fontSize={"xl"}
              _hover={{
                color: "primaryHover",
              }}
              variant={"link"}
            >
              {`<Acesse nosso catálogo>`}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"}>
        <Image
          mt={"70px"}
          alt={"Login Image"}
          position={{
            base: "relative",
            xl: "absolute",
            "2xl": "absolute",
          }}
          right={{ base: "0", xl: "10vw", "2xl": "10vw" }}
          src={"assets/images/aboutSectionImage.svg"}
          w={{ base: "300px", xl: "auto", "2xl": "auto" }}
        />
      </Flex>
    </Stack>
  );
}
