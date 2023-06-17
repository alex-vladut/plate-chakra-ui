import { LinkIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import {
  getPluginType,
  someNode,
  ELEMENT_LINK,
  triggerFloatingLink,
} from '@udecode/plate-headless';
import { useMyPlateEditorRef } from '../../types';


export function ToolbarAlignButton() {
  const editor = useMyPlateEditorRef();

  const type = getPluginType(editor, ELEMENT_LINK);
  const isLink = !!editor.selection && someNode(editor, { match: { type } });

  return (
    <IconButton
      aria-label="Link"
      icon={<LinkIcon />}
      isActive={isLink}
      size="sm"
      variant="ghost"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        triggerFloatingLink(editor, { focused: true });
      }}
    />
  );
}
