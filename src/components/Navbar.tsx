"use client";

import { Box, Container, Center, Flex } from "@chakra-ui/react";

import Link from "next/link";

export default function Navbar() {
  return (
    <Box bgColor={"#359F85"} h={"60px"} lineHeight={"60px"} color={"white"}>
      <Center>
        <Flex>
          <div style={{ marginRight: 70 }}>
            <Link href={"/"}>Event Management</Link>
          </div>
          <nav>
            <Link href={"/About/Learn"} className="mr-[20px]">
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
            <Link href={"/About"} className="mr-[20px]">
              {" "}
              About{""}
            </Link>
          </nav>
        </Flex>
      </Center>
    </Box>
  );
}
