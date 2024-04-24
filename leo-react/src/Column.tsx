import React, { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  crossAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  mainAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
}

/**
 * Description placeholder
 * @date 2024/4/4 - 22:49:02
 *
 * @param {{ children: React.ReactNode; crossAxisAlignment?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"; mainAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around"; }} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.crossAxisAlignment="flex-start"]
 * @param {string} [props.mainAxisAlignment="flex-start"]
 * @returns {React.ReactElement}
 */
const Column: React.FC<ColumnProps> = ({
  children,
  crossAxisAlignment = "flex-start",
  mainAxisAlignment = "flex-start",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: `${crossAxisAlignment}`,
        justifyContent: `${mainAxisAlignment}`,
        height:"100%"
      }}
    >
      {children}
    </div>
  );
};

export default Column;
