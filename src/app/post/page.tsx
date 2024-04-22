"use client";

import { Button, Text } from "@chakra-ui/react";
import { logoutProcess } from "@/api/auth";

export default function Post() {
  const handleLogout = () => {
    logoutProcess();
  };

  return (
    <div>
      <Text as={"h1"}> Post </Text>
      <Button onClick={() => handleLogout()}> Logout </Button>
      <hr></hr>
      <p> This is Post page </p>
    </div>
  );
}
