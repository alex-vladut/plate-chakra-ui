import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function Heading1({
  attributes,
  children,
  element,
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <chakra.h1
      m="2em 0 4px"
      fontSize="1.875em"
      fontWeight="semibold"
      lineHeight="1.3"
      // TODO: I don't know how to properly apply it as it doesn't seem to work through Plate's automatic behaviour
      // textAlign={(element['align'] as any) ?? undefined}
      {...attributes}
    >
      {children}
    </chakra.h1>
  );
}
