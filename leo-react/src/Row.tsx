import React, { ReactNode } from "react";

interface RowProps {
  children?: ReactNode;
  mainAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  crossAxisAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
}

/**
 * Description placeholder
 * @date 2024/4/4 - 22:49:58
 *
 * @param {{ children: React.ReactNode; mainAxisAlignment?: string; crossAxisAlignment?: string; }} props
 * @param {*} props.children
 * @param {string} [props.mainAxisAlignment="flex-start"]
 * @param {string} [props.crossAxisAlignment="flex-start"]
 * @returns {React.ReactElement}
 */
const Row: React.FC<RowProps> = ({
  children,
  mainAxisAlignment = "flex-start",
  crossAxisAlignment = "flex-start",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: `${mainAxisAlignment}`,
        alignItems: `${crossAxisAlignment}`,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Row;
