import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Checkbox, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import TodoButton from '../components/button';

export default function TodoItem(props: any) {
  const { todo, dispatch } = props;
  const [text, setText] = useState(todo.name);
  const [edit, setEdit] = useState(false);

  return (
    <Flex alignItems={'center'}>
      {edit ? (
        <Input value={text} onChange={(e: any) => setText(e.target.value)} />
      ) : (
        <Text fontSize={13}>{text}</Text>
      )}
      {!edit ? (
        <EditIcon
          w={4}
          h={4}
          ml={4}
          cursor={'pointer'}
          onClick={() => {
            setEdit(true);
          }}
        />
      ) : (
        <TodoButton
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
      <CheckIcon w={4} h={4} ml={4} cursor={'pointer'} />
      <CloseIcon
        cursor={'pointer'}
        ml={4}
        color="red.600"
        w={3}
        h={3}
        onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
      />
    </Flex>
  );
}
