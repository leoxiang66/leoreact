import React, { ReactNode } from 'react';

interface ExpandedProps {
  children: ReactNode;
  flexBasis?: string | number; // 基本长度，可选
  flexGrow?: number; // 扩展比例，默认为1
  flexShrink?: number; // 收缩比例，默认为1
}

/**
 * Expanded component to allow its children to fill the available space in a flex container.
 * @date 2024/04/24
 * 
 * @param {{ children: React.ReactNode; flexBasis?: string | number; flexGrow?: number; flexShrink?: number; }} props
 * @param {React.ReactNode} props.children Children to fill the expanded space.
 * @param {string | number} [props.flexBasis="auto"] Optional base length before remaining space is distributed.
 * @param {number} [props.flexGrow=1] Optional grow factor, defaults to 1.
 * @param {number} [props.flexShrink=1] Optional shrink factor, defaults to 1.
 * @returns {React.ReactElement}
 */
const Expanded: React.FC<ExpandedProps> = ({
  children,
  flexBasis = 'auto',
  flexGrow = 1,
  flexShrink = 1
}) => {
  return (
    <div
      style={{
        flex: `${flexGrow} ${flexShrink} ${flexBasis}`
      }}
    >
      {children}
    </div>
  );
};

export default Expanded;