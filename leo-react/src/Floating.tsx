import React, { ReactNode } from 'react';

interface FloatingProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  children?: ReactNode;
}

/**
 * Floating component that allows positioning of children elements using top, bottom, left, and right props.
 * It also allows setting optional width and height, with default values of 100%.
 *
 * @param {FloatingProps} props
 * @returns {JSX.Element}
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
      }}
    >
      {children}
    </div>
  );
};

export default Floating;