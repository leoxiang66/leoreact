import React, { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
}

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
