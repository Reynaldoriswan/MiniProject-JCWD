"use client";
import React, { useState } from "react";
import { register } from "../../api/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referral: "",
    role: "CUSTOMER",
  });
  const router = useRouter();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      toast.success("Pendaftaran berhasil");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Nama</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </FormControl>
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
          <FormControl id="referral">
            <FormLabel>Kode Referral</FormLabel>
            <Input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={onChange}
            />
          </FormControl>
          <FormControl id="role" isRequired>
            <FormLabel>Peran</FormLabel>
            <Select name="role" value={formData.role} onChange={onChange}>
              <option value="CUSTOMER">Peserta</option>
              <option value="PROMOTER">Penyelenggara</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Daftar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterPage;
