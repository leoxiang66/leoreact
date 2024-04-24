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
 * Description placeholder
 *
 * @param {{ children: any; all: any; vertical: any; horizontal: any; top: any; bottom: any; left: any; right: any; }} param0
 * @param {*} param0.children
 * @param {*} param0.all
 * @param {*} param0.vertical
 * @param {*} param0.horizontal
 * @param {*} param0.top
 * @param {*} param0.bottom
 * @param {*} param0.left
 * @param {*} param0.right
 * @returns {*}
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