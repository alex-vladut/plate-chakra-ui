import { PlateRenderElementProps } from '@udecode/plate-headless';
import { ListItem as ChakraListItem } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function ListItem({
  attributes,
  editor,
  nodeProps,
  element,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return <ChakraListItem {...attributes} {...rest} />;
}
