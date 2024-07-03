"use client";

import { Box, Container, Center, Flex } from "@chakra-ui/react";

import Link from "next/link";

export default function Navbar() {
  return (
    <Box bgColor={"blue.500"} h={"50px"} lineHeight={"50px"} color={"white"}>
      <Center>
        <Flex>
          <div style={{ marginRight: 50 }}>
            <Link href={"/"}>Yudhistira.id</Link>
          </div>
          <nav>
            <Link href={"/post"} className="mr-[20px]">
              {" "}
              Blog{" "}
            </Link>
            <Link href={"/product"} className="mr-[20px]">
              {" "}
              Product{" "}
            </Link>
            <Link href={"/project"} className="mr-[20px]">
              {" "}
              Project{" "}
            </Link>
            <Link href={"/about"} className="mr-[20px]">
              {" "}
              About{" "}
            </Link>
          </nav>
        </Flex>
      </Center>
    </Box>
  );
}
