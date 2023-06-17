import { PlateRenderElementProps } from '@udecode/plate-headless';
import { Th } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function TableCellHeader({
  attributes,
  element,
  nodeProps,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return <Th {...attributes} {...rest} />;
}
