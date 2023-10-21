import { Box, Input } from '@chakra-ui/react';
import { useReducer } from 'react';
import { initialState, todosReducer } from './todosReducer';
import TodoButton from '../components/button';
import Add from './add';
import TodoItem from './todo-item';

export default function Todos() {
  const [state, dispatch] = useReducer(todosReducer, initialState);


  return (
    <Box>
      <Add dispatch={dispatch} />
      {state.todos.map((todo: any) => (
        <TodoItem todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </Box>
  );
}
