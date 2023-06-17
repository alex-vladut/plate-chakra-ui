import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyElement, MyValue } from '../../types';

export function Paragraph({
  attributes,
  children,
  element,
  nodeProps,
  ...rest
}: PlateRenderElementProps<MyValue, MyElement>) {
  return (
    <chakra.p
      m={0}
      py={1}
      px={0}
      {...attributes}
      {...rest}
      // TODO: I don't know how to properly apply it as it doesn't seem to work through Plate's automatic behaviour
      // textAlign={element['align'] ?? undefined}
    >
      {children}
    </chakra.p>
  );
}
