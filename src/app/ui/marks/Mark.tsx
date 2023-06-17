import {
  MARK_BOLD,
  MARK_CODE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_KBD,
  MARK_SEARCH_HIGHLIGHT,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  PlateRenderLeafProps,
} from '@udecode/plate-headless';
import { Code, Kbd, Mark as ChakraMark } from '@chakra-ui/react';
import { MyText, MyValue, RichText } from '../../types';

type MarkProps<TText extends MyText> = Pick<
  PlateRenderLeafProps<MyValue, TText>,
  'children' | 'leaf'
>;

export function Mark({ children, leaf }: MarkProps<RichText>) {
  if (leaf[MARK_BOLD]) {
    children = <strong>{children}</strong>;
  }

  if (leaf[MARK_CODE]) {
    children = <Code>{children}</Code>;
  }

  if (leaf[MARK_ITALIC]) {
    children = <em>{children}</em>;
  }

  if (leaf[MARK_STRIKETHROUGH]) {
    children = <s>{children}</s>;
  }

  if (leaf[MARK_SUBSCRIPT]) {
    children = <sub>{children}</sub>;
  }

  if (leaf[MARK_SUPERSCRIPT]) {
    children = <sup>{children}</sup>;
  }

  if (leaf[MARK_UNDERLINE]) {
    children = <u>{children}</u>;
  }

  if (leaf[MARK_HIGHLIGHT]) {
    children = <ChakraMark>{children}</ChakraMark>;
  }
  if (leaf[MARK_SEARCH_HIGHLIGHT]) {
    children = (
      <ChakraMark
        whiteSpace="nowrap"
        paddingInlineStart={1}
        paddingInlineEnd={1}
        py={1}
        bgColor="orange.100"
      >
        {children}
      </ChakraMark>
    );
  }
  if (leaf[MARK_KBD]) {
    children = <Kbd>{children}</Kbd>;
  }

  return children;
}
