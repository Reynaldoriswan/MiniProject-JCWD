"use client";

import { useState } from "react";

import {
  Center,
  Grid,
  Card,
  CardBody,
  FormControl,
  Input,
} from "@chakra-ui/react";

export default function Register() {
  const [email, setEmail] = useState("");

  return (
    <div>
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
