import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function Heading3({
  attributes,
  children,
  element,
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <chakra.h3
      m="1em 0 1px"
      fontSize="1.25em"
      fontWeight="semibold"
      lineHeight="1.3"
      color="#434343"
      // TODO: I don't know how to properly apply it as it doesn't seem to work through Plate's automatic behaviour
      // textAlign={element.align ?? undefined}
      {...attributes}
    >
      {children}
    </chakra.h3>
  );
}
