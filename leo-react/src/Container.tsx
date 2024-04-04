import React, { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  padding?: string; // CSS padding 属性值，例如 "10px" 或 "10px 15px"
  margin?: string; // CSS margin 属性值，例如 "10px" 或 "10px 15px"
  backgroundColor?: string; // CSS 背景颜色值，例如 "#fff" 或 "red"
  width?: string; // 容器的宽度，例如 "100%" 或 "200px"
  height?: string; // 容器的高度，例如 "100vh" 或 "300px"
  style?: CSSProperties; // 允许传递其他任何 CSS 属性
}


/**
 * Description placeholder
 * @date 2024/4/4 - 23:12:43
 *
 * @param {{ children: any; padding: any; margin: any; backgroundColor: any; width: any; height: any; style: any; }} param0
 * @param {*} param0.children
 * @param {*} param0.padding
 * @param {*} param0.margin
 * @param {*} param0.backgroundColor
 * @param {*} param0.width
 * @param {*} param0.height
 * @param {*} param0.style
 * @returns {Element}
 */
const Container: React.FC<ContainerProps> = ({
  children,
  padding,
  margin,
  backgroundColor,
  width,
  height,
  style
}) => {
  // 组合用户定义的样式与组件内置样式
  const combinedStyles: CSSProperties = {
    padding,
    margin,
    backgroundColor,
    width,
    height,
    ...style, // 将用户定义的其他样式属性与内置样式合并
  };

  return <div style={combinedStyles}>{children}</div>;
};

export default Container;
