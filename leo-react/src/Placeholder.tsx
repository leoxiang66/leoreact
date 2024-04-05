import React from 'react';

interface PlaceholderProps {
  width?: string; // 占位符的宽度，默认值可以是'100px'
  height?: string; // 占位符的高度，默认值可以是'100px'
  color?: string; // 占位符边框的颜色，默认为灰色
}

/**
 * 一个简单的占位符组件，模仿Flutter的Placeholder，允许自定义宽度、高度和边框颜色。
 * 
 * @param {PlaceholderProps} {
 *   width = '100px',
 *   height = '100px',
 *   color = 'grey',
 * }
 * @returns {JSX.Element}
 */
const Placeholder: React.FC<PlaceholderProps> = ({
  width = '100px',
  height = '100px',
  color = 'grey',
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#f0f0f0', // 轻灰色背景
        border: `2px dashed ${color}`, // 虚线边框
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color, // 文本颜色与边框颜色一致
        fontSize: '14px',
      }}
    >
      Placeholder
    </div>
  );
};

export default Placeholder;
