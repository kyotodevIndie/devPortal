import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonDefaultProps {
  children: any;
  leftIcon?: any;
  rightIcon?: any;
  variant?: string;
  href?: string;
  bg?: string;
  color?: string;
  fontSize?: string;
  w?: string;
}

function ButtonDefault({
  children,
  leftIcon,
  rightIcon,
  variant,
  href,
  bg,
  color,
  fontSize,
  w,
}: ButtonDefaultProps) {
  return (
    <Button
      fontWeight={"normal"}
      bg={bg ? bg : "primary"}
      color={color ? color : "white"}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      variant={variant}
      borderRadius={"50px"}
      padding={"20px 30px"}
      _hover={{ bg: "primaryHover" }}
      fontSize={fontSize ? fontSize : "sm"}
      w={w ? w : "fill"}
    >
      {children}
    </Button>
  );
}

export default ButtonDefault;
