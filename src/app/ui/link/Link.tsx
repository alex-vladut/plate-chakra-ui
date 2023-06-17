import { LinkRootProps } from '@udecode/plate-headless';
import { Link as ChakraLink } from '@chakra-ui/react';

export function Link({
  attributes,
  editor,
  nodeProps,
  element,
  ...rest
}: LinkRootProps) {
  return <ChakraLink color="blue.500" {...attributes} {...rest} />;
}
