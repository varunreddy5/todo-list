'use client';
import { Box, Container } from '@chakra-ui/react';
import Todos from './todos/todos.page';

export default function Home() {
  return (
    <Container maxW={'4xl'}>
      <Todos />
    </Container>
  );
}
