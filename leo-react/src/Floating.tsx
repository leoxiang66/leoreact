import React, { ReactNode } from 'react';

interface FloatingProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  children?: ReactNode;
}


/**
 * Description placeholder
 * @date 2024/4/5 - 09:31:33
 *
 * @param {{ top: any; bottom: any; left: any; right: any; children: any; }} param0
 * @param {*} param0.top
 * @param {*} param0.bottom
 * @param {*} param0.left
 * @param {*} param0.right
 * @param {*} param0.children
 * @returns {*}
 */
const Floating: React.FC<FloatingProps> = ({ top, bottom, left, right, children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {children}
    </div>
  );
};

export default Floating;
