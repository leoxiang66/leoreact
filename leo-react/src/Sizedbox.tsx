import React, { ReactNode } from "react";

interface SizedBoxProps {
  children: ReactNode;
  width?: string;
  height?: string;
}

/**
 * Description placeholder
 *
 * @param {{ children: any; width: any; height: any; }} param0
 * @param {*} param0.children
 * @param {*} param0.width
 * @param {*} param0.height
 * @returns {*}
 */
const SizedBox: React.FC<SizedBoxProps> = ({ children, width, height }) => {
  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;
  style.display = "flex";

  return <div style={style}>{children}</div>;
};

export default SizedBox;
