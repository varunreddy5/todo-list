import { Button, ButtonProps } from '@chakra-ui/react';

export default function TodoButton(props: ButtonProps) {
  const { children, variant='solid', ...others } = props;
  return (
    <Button colorScheme="teal" variant={variant} fontSize={13} {...others}>
      {children}
    </Button>
  );
}
