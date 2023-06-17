import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function BlockQuote({
  attributes,
  children,
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <chakra.blockquote
      m="1.5em 10px"
      p="0.5em 10px"
      borderLeftWidth="2px"
      borderLeftColor="gray.200"
      color="gray.200"
      {...attributes}
    >
      {children}
    </chakra.blockquote>
  );
}
