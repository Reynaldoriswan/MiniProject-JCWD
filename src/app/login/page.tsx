"use client";
import React, { useState } from "react";
import { login } from "../../api/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      document.cookie = `authToken=${data.token}; path=/`;
      toast.success("Login berhasil");
      router.push("/post");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
