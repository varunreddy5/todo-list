import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Input } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import TodoButton from '../components/button';
import { TodoItemProps } from '../types';

export default function TodoItem({ todo, dispatch }: TodoItemProps) {
  const [text, setText] = useState<string>(todo.name);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} mt={2} px={3}>
      {edit ? (
        <Input
          value={text}
          width={'50%'}
          size="sm"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      ) : (
        <Box py={3} fontSize={13}>
          {text}
        </Box>
      )}
      <Box>
        {!edit ? (
          <EditIcon
            w={4}
            h={4}
            ml={4}
            color={'orange.300'}
            cursor={'pointer'}
            onClick={() => {
              setEdit(true);
            }}
          />
        ) : (
          <TodoButton
            size={'xs'}
            variant={'outline'}
            onClick={() => {
              setEdit(false);
              dispatch({
                type: 'EDIT_TODO',
                id: todo.id,
                name: text,
              });
            }}
          >
            Save
          </TodoButton>
        )}
        <CheckIcon
          w={4}
          h={4}
          ml={4}
          cursor={'pointer'}
          color="green.600"
          onClick={() => {
            dispatch({ type: 'COMPLETED_TODO', id: todo.id, name: todo.name });
            dispatch({ type: 'DELETE_TODO', id: todo.id });
          }}
        />
        <CloseIcon
          cursor={'pointer'}
          ml={4}
          color="red.600"
          w={3}
          h={3}
          onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
        />
      </Box>
    </Flex>
  );
}
