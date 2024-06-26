import React, { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  padding?: string; // CSS padding 属性值，例如 "10px" 或 "10px 15px"
  margin?: string; // CSS margin 属性值，例如 "10px" 或 "10px 15px"
  backgroundColor?: string; // CSS 背景颜色值，例如 "#fff" 或 "red"
  width?: string; // 容器的宽度，例如 "100%" 或 "200px"
  height?: string; // 容器的高度，例如 "100vh" 或 "300px"
  borderRadius?: string; // 容器的圆角大小，例如 "10px"
  style?: CSSProperties; // 允许传递其他任何 CSS 属性
}

/**
 * 一个支持自定义样式，包括圆角大小的容器组件。
 * 
 * @param {ContainerProps} {
 *   children,
 *   padding,
 *   margin,
 *   backgroundColor,
 *   width,
 *   height,
 *   borderRadius,
 *   style
 * }
 * @returns {JSX.Element}
 */
const Container: React.FC<ContainerProps> = ({
  children,
  padding,
  margin,
  backgroundColor,
  width,
  height,
  borderRadius, // 新增 borderRadius 属性
  style
}) => {
  // 组合用户定义的样式与组件内置样式，新增 borderRadius
  const combinedStyles: CSSProperties = {
    padding,
    margin,
    backgroundColor,
    width,
    height,
    borderRadius, // 应用 borderRadius
    ...style, // 将用户定义的其他样式属性与内置样式合并
  };

  return <div style={combinedStyles}>{children}</div>;
};

export default Container;
