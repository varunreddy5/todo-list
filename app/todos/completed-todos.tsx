import { Box, Divider, Text } from '@chakra-ui/react';
import ToDoHeading from './todo-heading';
import { TodoProps } from '../types';

export default function CompletedTodos({ todos }: { todos: TodoProps[] }) {
  return (
    <Box mt={5}>
      <ToDoHeading text={'Completed Todos'} />
      <Box mt={5} px={3}>
        {todos.map((todo: TodoProps) => (
          <Text fontSize={13} mt={3}>
            {todo.name}
          </Text>
        ))}
      </Box>
    </Box>
  );
}
