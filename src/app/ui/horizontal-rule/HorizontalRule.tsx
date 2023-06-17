import { PlateRenderElementProps } from '@udecode/plate-headless';
import { chakra } from '@chakra-ui/react';
import { MyHrElement, MyValue, useMyPlateEditorRef } from '../../types';

export function HorizontalRule({
  attributes,
  children,
  nodeProps,
}: PlateRenderElementProps<MyValue, MyHrElement>) {
  const editor = useMyPlateEditorRef();

  return (
    <chakra.div {...attributes} {...nodeProps}>
      <chakra.hr
        contentEditable={false}
        cursor="pointer"
        py={1}
        my={6}
        bgClip="content-box"
        bgColor={editor.selected && editor.focused ? 'blue.500' : 'gray.200'}
        border="none"
        borderRadius="1px"
        h="2px"
        {...nodeProps}
      />
      {children}
    </chakra.div>
  );
}
