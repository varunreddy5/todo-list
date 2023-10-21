import { Box, Divider, Input, Text } from '@chakra-ui/react';
import { useReducer } from 'react';
import { initialState, todosReducer } from './todosReducer';
import TodoButton from '../components/button';
import Add from './add';
import TodoItem from './todo-item';
import CompletedTodos from './completed-todos';

export default function Todos() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <Box>
      <Add dispatch={dispatch} />
      <Text fontSize={16} fontWeight={600} mt={10}>
        Your Todos
      </Text>
      <Divider />
      <Box maxH={'400px'} minH={'300px'} overflowY={'scroll'}>
        {state.todos.map((todo: any) => (
          <TodoItem todo={todo} dispatch={dispatch} key={todo.id} />
        ))}
      </Box>
      <CompletedTodos todos={state.completed} />
    </Box>
  );
}
