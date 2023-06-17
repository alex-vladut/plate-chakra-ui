import { PlateRenderElementProps } from '@udecode/plate-headless';
import { OrderedList as ChakraOrderedList } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function OrderedList({
  attributes,
  editor,
  nodeProps,
  element,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return <ChakraOrderedList {...attributes} {...rest} />;
}
