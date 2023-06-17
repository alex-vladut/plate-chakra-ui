import { Flex, FlexProps } from '@chakra-ui/react';

export function Toolbar(props: FlexProps) {
  return (
    <Flex
      justify="start"
      align="center"
      px="4"
      py="2"
      w="full"
      overflowX="auto"
      borderBottomWidth="1px"
      borderBottomColor="gray.400"
      mb="2"
      {...props}
    />
  );
}
