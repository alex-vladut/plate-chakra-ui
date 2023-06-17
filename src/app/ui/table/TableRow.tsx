import { PlateRenderElementProps } from '@udecode/plate-headless';
import { Tr } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function TableRow({
  attributes,
  element,
  nodeProps,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return <Tr {...attributes} {...rest} />;
}
