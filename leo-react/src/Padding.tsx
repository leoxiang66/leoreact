import React, { ReactNode } from 'react';

interface PaddingProps {
  children: ReactNode;
  all?: number; // 同时设置上下左右的内边距
  vertical?: number; // 同时设置上下的内边距
  horizontal?: number; // 同时设置左右的内边距
  top?: number; // 单独设置上边距
  bottom?: number; // 单独设置下边距
  left?: number; // 单独设置左边距
  right?: number; // 单独设置右边距
}

/**
 * Padding component to apply consistent spacing around its child element.
 * @date 2024/04/24
 *
 * @param {{ children: React.ReactNode; all?: number; vertical?: number; horizontal?: number; top?: number; bottom?: number; left?: number; right?: number; }} props
 * @returns {React.ReactElement}
 */
const Padding: React.FC<PaddingProps> = ({
  children,
  all,
  vertical,
  horizontal,
  top,
  bottom,
  left,
  right,
}) => {
  const style = {
    paddingTop: top ?? vertical ?? all ?? 0,
    paddingBottom: bottom ?? vertical ?? all ?? 0,
    paddingLeft: left ?? horizontal ?? all ?? 0,
    paddingRight: right ?? horizontal ?? all ?? 0,
  };

  return <div style={style}>{children}</div>;
};

export default Padding;