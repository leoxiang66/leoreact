import React from 'react';

interface SizedBoxProps {
  width?: number;
  height?: number;
}


/**
 * Description placeholder
 * @date 2024/4/4 - 22:50:38
 *
 * @param {{ width?: number; height?: number; }} param0
 * @param {number} [param0.width=20]
 * @param {number} [param0.height=20]
 * @returns {Element}
 */
const SizedBox: React.FC<SizedBoxProps> = ({ width = 20, height = 20 }) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }}></div>;
};

export default SizedBox;