import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import {
  focusEditor,
  isMarkActive,
  toggleMark,
  ToggleMarkPlugin,
} from '@udecode/plate-headless';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatStrikethrough,
} from 'react-icons/md';
import { IconType } from 'react-icons/lib';

import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';

import { useMyPlateEditorRef } from '../../types';

type Mark = {
  [MARK_BOLD]: IconType;
  [MARK_CODE]: IconType;
  [MARK_ITALIC]: IconType;
  [MARK_STRIKETHROUGH]: IconType;
  [MARK_SUBSCRIPT]: IconType;
  [MARK_SUPERSCRIPT]: IconType;
  [MARK_UNDERLINE]: IconType;
};

const DEFAULT_ICONS: Mark = {
  [MARK_BOLD]: MdFormatBold,
  [MARK_ITALIC]: MdFormatItalic,
  [MARK_UNDERLINE]: MdFormatUnderlined,
  [MARK_STRIKETHROUGH]: MdFormatStrikethrough,
  [MARK_CODE]: MdFormatStrikethrough,
  [MARK_SUBSCRIPT]: MdFormatStrikethrough,
  [MARK_SUPERSCRIPT]: MdFormatStrikethrough,
};

type Props = { id?: string; type: keyof Mark } & Pick<
  ToggleMarkPlugin,
  'clear'
> &
  Omit<IconButtonProps, 'type'>;

export const ToolbarMarkButton = ({
  id,
  type,
  icon,
  clear,
  ...styles
}: Props) => {
  const editor = useMyPlateEditorRef();

  return (
    <IconButton
      isActive={!!editor?.selection && isMarkActive(editor, type)}
      size="sm"
      variant="ghost"
      icon={icon || <Icon as={DEFAULT_ICONS[type]} />}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleMark(editor, { key: type, clear });
        focusEditor(editor);
      }}
      {...styles}
    />
  );
};
