import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function Heading2({
  attributes,
  children,
  element,
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <chakra.h2
      m="1.4em 0 1px"
      fontSize="1.5em"
      fontWeight="semibold"
      lineHeight="1.3"
      // TODO: I don't know how to properly apply it as it doesn't seem to work through Plate's automatic behaviour
      // textAlign={element.align ?? undefined}
      {...attributes}
    >
      {children}
    </chakra.h2>
  );
}
