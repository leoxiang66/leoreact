import React from 'react';

// 添加了一个新的属性 `align` 来控制子项的垂直对齐
const Column = ({ children, align = 'flex-start' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: align }}>
      {children}
    </div>
  );
};

export default Column;
