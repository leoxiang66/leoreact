import React, { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
  width?: string | number; // 可以指定宽度，可选
  height?: string | number; // 可以指定高度，可选
}

/**
 * Center component to horizontally and vertically align its children.
 * @date 2024/04/24
 *
 * @param {{ children: React.ReactNode; width?: string | number; height?: string | number; }} props
 * @param {React.ReactNode} props.children Children to be centered.
 * @param {string | number} [props.width="100%"] Optional width for the center container.
 * @param {string | number} [props.height="100%"] Optional height for the center container.
 * @returns {React.ReactElement}
 */
const Center: React.FC<CenterProps> = ({
  children,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", // Vertically center
        justifyContent: "center", // Horizontally center
        width: width, // Default to 100%, can be overridden
        height: height, // Default to 100%, can be overridden
      }}
    >
      {children}
    </div>
  );
};

export default Center;
