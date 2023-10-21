'use client';
import { Container } from '@chakra-ui/react';
import Todos from './todos/todos.page';

export default function Home() {
  return (
    <Container maxW={'xl'}>
      <Todos />
    </Container>
  );
}
