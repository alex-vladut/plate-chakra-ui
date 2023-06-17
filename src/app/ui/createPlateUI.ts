import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_LI,
  ELEMENT_LINK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TODO_LI,
  ELEMENT_TR,
  ELEMENT_UL,
  MARK_BOLD,
  MARK_CODE,
  MARK_COMMENT,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_KBD,
  MARK_SEARCH_HIGHLIGHT,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  PlatePluginComponent,
} from '@udecode/plate-headless';

import { DefaultPlatePluginKey } from '../types/DefaultPlatePluginKey';
import { Leaf } from './marks/Leaf';
import { Link } from './link/Link';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './heading';
import { BlockQuote } from './block-quote';
import { HorizontalRule } from './horizontal-rule';
import { Paragraph } from './paragraph';
import { ListItem, OrderedList, UnorderedList } from './list';
import { Table } from './table';
import { TableCell } from './table/TableCell';
import { TableCellHeader } from './table/TableCellHeader';
import { TableRow } from './table/TableRow';

export const createPlateUI = <T extends string = string>(
  overrideByKey?: Partial<
    Record<DefaultPlatePluginKey | T, PlatePluginComponent>
  >
) => {
  const components = {
    [ELEMENT_BLOCKQUOTE]: BlockQuote,
    [ELEMENT_HR]: HorizontalRule,
    [ELEMENT_LINK]: Link,
    [ELEMENT_LI]: ListItem,
    [ELEMENT_OL]: OrderedList,
    [ELEMENT_UL]: UnorderedList,
    [ELEMENT_H1]: Heading1,
    [ELEMENT_H2]: Heading2,
    [ELEMENT_H3]: Heading3,
    [ELEMENT_H4]: Heading4,
    [ELEMENT_H5]: Heading5,
    [ELEMENT_H6]: Heading6,
    [ELEMENT_PARAGRAPH]: Paragraph,
    [ELEMENT_TABLE]: Table,
    [ELEMENT_TD]: TableCell,
    [ELEMENT_TH]: TableCellHeader,
    [ELEMENT_TR]: TableRow,
    [MARK_BOLD]: Leaf,
    [MARK_CODE]: Leaf,
    [MARK_HIGHLIGHT]: Leaf,
    [MARK_ITALIC]: Leaf,
    [MARK_KBD]: Leaf,
    [MARK_SEARCH_HIGHLIGHT]: Leaf,
    [MARK_STRIKETHROUGH]: Leaf,
    [MARK_SUBSCRIPT]: Leaf,
    [MARK_SUPERSCRIPT]: Leaf,
    [MARK_UNDERLINE]: Leaf,
  };

  if (overrideByKey) {
    Object.keys(overrideByKey).forEach((key) => {
      (components as any)[key] = (overrideByKey as any)[key];
    });
  }

  return components as Record<DefaultPlatePluginKey | T, PlatePluginComponent>;
};
