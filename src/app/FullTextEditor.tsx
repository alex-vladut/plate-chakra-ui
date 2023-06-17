import { useEffect, useState, useMemo } from 'react';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  Plate,
  PlateProvider,
  TEditableProps,
  createPlateEditor,
} from '@udecode/plate-headless';
import { MyParagraphElement, MyValue } from './types';
// import { BasicElementToolbarButtons } from './ui/toolbar/BasicElementToolbarButtons';
// import { BasicMarksToolbarButtons } from './ui/toolbar/BasicMarksToolbarButtons';
// import { ListToolbarButtons } from './ui/toolbar/ListToolbarButtons';
// import { TableToolbarButtons } from './ui/toolbar/TableToolbarButtons';
// import { Toolbar } from './ui/toolbar/Toolbar';
import plugins from './plugins';
import { Box } from '@chakra-ui/react';
import { Toolbar } from './ui/toolbar/Toolbar';
import { ToolbarLinkButton } from './ui/toolbar/ToolbarLinkButton';
import { ToolbarMarkButton } from './ui/toolbar/ToolbarMarkButton';
// import { LinkToolbarButton } from './ui/toolbar/LinkToolbarButton';
// import { faLink } from '@fortawesome/free-solid-svg-icons';

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  placeholder: 'Write something...',
  style: {
    padding: '8px',
  },
};

const createElement = (
  text: string,
  { type = ELEMENT_PARAGRAPH, mark }: any = {}
) => {
  const leaf: any = { text };
  if (mark) {
    leaf[mark] = true;
  }

  return {
    type,
    children: [leaf],
  };
};

const defaultValue = [
  createElement('🧱 Elements', { type: ELEMENT_H1 }),
  createElement('🔥 Basic Elements', { type: ELEMENT_H2 }),
  createElement('These are the most common elements, known as blocks:'),
  createElement('Heading 1', { type: ELEMENT_H1 }),
  createElement('Heading 2', { type: ELEMENT_H2 }),
  createElement('Heading 3', { type: ELEMENT_H3 }),
  createElement('Heading 4', { type: ELEMENT_H4 }),
  createElement('Heading 5', { type: ELEMENT_H5 }),
  createElement('Heading 6', { type: ELEMENT_H6 }),
  createElement('Lists', { type: ELEMENT_H1 }),
  {
    type: ELEMENT_OL,
    children: [
      {
        type: ELEMENT_LI,
        children: [{ text: 'First list item' }],
      },
      {
        type: ELEMENT_LI,
        children: [{ text: 'Second list item' }],
      },
    ],
  },
  createElement('💅 Marks', { type: ELEMENT_H1 }),
  createElement('💧 Basic Marks', { type: ELEMENT_H2 }),
  createElement(
    'The basic marks consist of text formatting such as bold, italic, underline, strikethrough, subscript, superscript, and code.'
  ),
  createElement(
    'You can customize the type, the component and the hotkey for each of these.'
  ),
  createElement('This text is bold.', { mark: MARK_BOLD }),
  createElement('This text is italic.', { mark: MARK_ITALIC }),
  createElement('This text is underlined.', {
    mark: MARK_UNDERLINE,
  }),
  {
    type: ELEMENT_PARAGRAPH,
    children: [
      {
        text: 'This text is bold, italic and underlined.',
        [MARK_BOLD]: true,
        [MARK_ITALIC]: true,
        [MARK_UNDERLINE]: true,
      },
    ],
  },
  {
    type: ELEMENT_HR,
    children: [{ text: '' }],
  },

  createElement('This is a strikethrough text.', {
    mark: MARK_STRIKETHROUGH,
  }),
  createElement('This is an inline code.', { mark: MARK_CODE }),
];

const FullTextEditor: React.FC<{
  id: string;
  className?: string;
  initialValue?: MyValue;
  readOnly?: boolean;
  onChange?: (value: MyValue) => void;
}> = ({ id, className, initialValue, readOnly, onChange }) => {
  const [internalValue, setInternalValue] = useState<MyValue>(
    initialValue || defaultValue
  );

  const editor = useMemo(
    () =>
      createPlateEditor({
        id: id,
        plugins: plugins,
      }),
    [id]
  );

  const onEditorChanged = (v: MyValue) => {
    setInternalValue(v);

    if (onChange) {
      onChange(v);
    }
  };

  useEffect(() => {
    setInternalValue(initialValue || defaultValue);
    editor.children = initialValue || defaultValue;
  }, [initialValue]);

  if (readOnly) {
    return (
      <div>
        <PlateProvider<MyValue>
          initialValue={internalValue}
          readOnly={readOnly}
        >
          <Plate<MyValue> editableProps={editableProps} />
        </PlateProvider>
      </div>
    );
  }

  return (
    <div>
      <Box rounded="xl" borderBottomWidth={2} borderBottomStyle="solid">
        <PlateProvider<MyValue>
          editor={editor}
          plugins={plugins}
          initialValue={internalValue}
          onChange={onEditorChanged}
        >
          <Toolbar>
            <ToolbarLinkButton />
            <ToolbarMarkButton aria-label="Bold" type="bold" />
            <ToolbarMarkButton aria-label="Italic" type="italic" />
            <ToolbarMarkButton aria-label="Underline" type="underline" />
            <ToolbarMarkButton
              aria-label="Strikethrough"
              type="strikethrough"
            />
            {/* 
            <BasicElementToolbarButtons />
            <BasicMarksToolbarButtons />
            <LinkToolbarButton icon={faLink} />
            <ListToolbarButtons />
            <TableToolbarButtons />
         */}
          </Toolbar>

          <Plate<MyValue> editableProps={editableProps} />
        </PlateProvider>
      </Box>
    </div>
  );
};

export default FullTextEditor;
