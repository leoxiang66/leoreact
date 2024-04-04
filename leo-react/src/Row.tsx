import React, { ReactNode } from "react";

interface RowProps {
  children?: ReactNode;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

/**
 * Description placeholder
 * @date 2024/4/4 - 22:49:58
 *
 * @param {{ children: any; justify?: string; }} param0
 * @param {*} param0.children
 * @param {string} [param0.justify="flex-start"]
 * @returns {*}
 */
const Row: React.FC<RowProps> = ({ children, justify = "flex-start" }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", justifyContent: justify }}
    >
      {children}
    </div>
  );
};

export default Row;
