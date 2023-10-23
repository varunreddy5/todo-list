import { Box, Divider, Input, Text } from '@chakra-ui/react';
import { useReducer } from 'react';
import { initialState, todosReducer } from './todosReducer';
import Add from './add';
import TodoItem from './todo-item';
import CompletedTodos from './completed-todos';
import ToDoHeading from './todo-heading';
import { TodoProps } from '../types';

export default function Todos() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <Box>
      <Add dispatch={dispatch} />
      <ToDoHeading text={'Your Todos'} />
      <Box maxH={'400px'} minH={'300px'} overflowY={'scroll'}>
        {state.todos.map((todo: TodoProps) => (
          <TodoItem todo={todo} dispatch={dispatch} key={todo.id} />
        ))}
      </Box>
      <CompletedTodos todos={state.completed} />
    </Box>
  );
}
