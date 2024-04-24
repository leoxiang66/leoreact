import React, { ReactNode } from "react";
import SizedBox from "./Sizedbox";

interface FullScreenProps {
  children: ReactNode;
}

/**
 * Description placeholder
 *
 * @param {{ children: any; }} param0
 * @param {*} param0.children
 * @returns {*}
 */
const FullScreen: React.FC<FullScreenProps> = ({ children }) => {
  return (
    <SizedBox width="100vw" height="100vh">
      {children}
    </SizedBox>
  );
};

export default FullScreen;
