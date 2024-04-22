"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Center,
  Grid,
  FormControl,
  Input,
  Text,
  CardFooter,
} from "@chakra-ui/react";

import { loginProcess } from "@/api/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const resLogin = await loginProcess(email, password);

      //localStorage.setItem("authToken", resLogin.data.token);
      //cookies().set("authToken", resLogin.data.token);
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return (
    <div>
      <Text as={"h1"}> Login </Text>
      <hr></hr>
      <Center>
        <Grid>
          <Card>
            <CardBody>
              <FormControl marginBottom={5}>
                <label> Email </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <label> Password </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </FormControl>
            </CardBody>
            <CardFooter>
              <Button onClick={() => handleLogin()}> Login </Button>
            </CardFooter>
          </Card>
        </Grid>
      </Center>
    </div>
  );
}
