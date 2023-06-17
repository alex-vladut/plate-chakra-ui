import { PlateRenderElementProps } from '@udecode/plate-headless';
import { Table as ChakraTable, TableContainer } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function Table({
  attributes,
  element,
  nodeProps,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <TableContainer>
      <ChakraTable {...attributes} {...rest} />
    </TableContainer>
  );
}
