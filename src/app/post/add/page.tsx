"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Text,
  Container,
  Card,
  CardBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import { createPost } from "@/api/post";

export default function PostAdd() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreatePost = async () => {
    const res = await createPost({
      title: title,
      body: body,
    });
  };

  return (
    <Container>
      <Text as={"h1"}> Post Add </Text>
      <hr />
      <p> This is Post page </p>

      <form>
        <Card>
          <CardBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel> Body </FormLabel>
              <Textarea
                value={body}
                name="body"
                onChange={(e) => setBody(e.target.value)}
              ></Textarea>
            </FormControl>
            <FormControl>
              <Button color={"blue.500"} onClick={() => handleCreatePost()}>
                Submit{" "}
              </Button>
            </FormControl>
          </CardBody>
        </Card>
      </form>
    </Container>
  );
}
