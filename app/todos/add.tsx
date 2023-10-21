import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';
import TodoButton from '../components/button';
import { uuid } from 'uuidv4';

export default function Add(props: any) {
  const { dispatch, id } = props;
  const [text, setText] = useState('');
  const uniqueId = uuid();
  return (
    <Box display="flex">
      <Input
        type="text"
        value={text}
        fontSize={13}
        onChange={(e) => setText(e.target.value)}
      />
      <TodoButton
        ml={4}
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            id: uniqueId,
            name: text,
          });
          setText('');
        }}
      >
        Add
      </TodoButton>
    </Box>
  );
}
