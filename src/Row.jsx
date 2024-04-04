import React from 'react';

// 添加了一个新的属性 `justify` 来控制子项的水平对齐
const Row = ({ children, justify = 'flex-start' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: justify }}>
      {children}
    </div>
  );
};

export default Row;
