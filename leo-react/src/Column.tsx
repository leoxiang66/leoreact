import React, { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
}

/**
 * Description placeholder
 * @date 2024/4/4 - 22:49:02
 *
 * @param {{ children: any; align?: string; }} param0
 * @param {*} param0.children
 * @param {string} [param0.align="flex-start"]
 * @returns {*}
 */
const Column: React.FC<ColumnProps> = ({ children, align = "flex-start" }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: align }}
    >
      {children}
    </div>
  );
};

export default Column;
