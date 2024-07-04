"use client";

import { useState, useEffect } from "react";
import { Button, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { logoutProcess } from "@/api/auth";
import { getAllPosts } from "@/api/post";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    const posts = await getAllPosts();

    setPosts(posts.data);
  };

  const handleLogout = () => {
    logoutProcess();
  };

  return (
    <div>
      <Text as={"h1"}> Post </Text>
      <Button onClick={() => handleLogout()}> Logout </Button>
      <hr></hr>

      <UnorderedList>
        {posts?.data?.map((item: any, index: number) => (
          <ListItem key={index}>{item.title}</ListItem>
        ))}
      </UnorderedList>
    </div>
  );
}
