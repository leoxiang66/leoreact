import React from 'react';

interface SizedBoxProps {
  width?: number;
  height?: number;
}

const SizedBox: React.FC<SizedBoxProps> = ({ width = 20, height = 20 }) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }}></div>;
};

export default SizedBox;
