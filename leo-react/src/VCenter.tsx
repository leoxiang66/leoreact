import React from 'react';

interface VCenterProps {
  children: React.ReactNode; // 定义接受的子元素类型
}


/**
 * Description placeholder
 * @date 2024/4/8 - 21:58:30
 *
 * @param {{ children: any; }} param0
 * @param {*} param0.children
 * @returns {*}
 */
const VCenter: React.FC<VCenterProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      {children}
    </div>
  );
};

export default VCenter;
