import { PlateRenderElementProps } from '@udecode/plate-headless';
import { UnorderedList as ChakraUnorderedList } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function UnorderedList({
  attributes,
  editor,
  nodeProps,
  element,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return <ChakraUnorderedList {...attributes} {...rest} />;
}
