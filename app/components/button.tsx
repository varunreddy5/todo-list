import { Button, ButtonProps } from '@chakra-ui/react';

export default function TodoButton(props: ButtonProps) {
  const { children, ...others } = props;
  return (
    <Button colorScheme="teal" variant="solid" fontSize={13} {...others}>
      {children}
    </Button>
  );
}
