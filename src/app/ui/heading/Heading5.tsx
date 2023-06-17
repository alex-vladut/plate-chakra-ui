import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function Heading5({
  attributes,
  children,
  element,
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <chakra.h5
      m="0.75em 0 0"
      fontSize="1.1em"
      fontWeight="semibold"
      lineHeight="1.3"
      color="#666666"
      // TODO: I don't know how to properly apply it as it doesn't seem to work through Plate's automatic behaviour
      // textAlign={element.align ?? undefined}
      {...attributes}
    >
      {children}
    </chakra.h5>
  );
}
