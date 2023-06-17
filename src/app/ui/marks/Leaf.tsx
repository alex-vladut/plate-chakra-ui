import { PlateRenderLeafProps } from '@udecode/plate-headless';

import { Mark } from './Mark';
import { MyText, MyValue } from '../../types';

export type LeafProps = PlateRenderLeafProps<MyValue, MyText>;

export const Leaf = (props: LeafProps) => {
  const { attributes } = props;

  return (
    <span {...attributes}>
      <Mark {...props} />
    </span>
  );
};
