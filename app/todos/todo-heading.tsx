import { Divider, Text } from '@chakra-ui/react';

export default function ToDoHeading(props: any) {
  const { text } = props;
  return (
    <>
      <Text fontSize={16} fontWeight={600}>
        {text}
      </Text>
      <Divider />
    </>
  );
}
