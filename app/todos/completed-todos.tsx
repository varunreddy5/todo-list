import { Box, Divider, Text } from '@chakra-ui/react';

export default function CompletedTodos(props: any) {
  const { todos } = props;
  return (
    <Box mt={5}>
      <Text fontSize={16} fontWeight={600}>
        Completed List
      </Text>
      <Divider />
      <Box mt={5} px={3}>
        {todos.map((todo: any) => (
          <Text fontSize={13}>{todo.name}</Text>
        ))}
      </Box>
    </Box>
  );
}
