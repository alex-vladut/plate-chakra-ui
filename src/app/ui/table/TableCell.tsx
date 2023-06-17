import { PlateRenderElementProps } from '@udecode/plate-headless';
import { Td } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function TableCell({
  attributes,
  element,
  nodeProps,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return <Td {...attributes} {...rest} />;
}
