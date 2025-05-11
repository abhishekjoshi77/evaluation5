
import { Container, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Container maxW="container.md" mt={6}>
      <Heading mb={4}>About</Heading>
      <Text>This is a mini notes app built with React, Firebase, and Chakra UI.</Text>
    </Container>
  );
}
