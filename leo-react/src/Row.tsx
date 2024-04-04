import React, { ReactNode } from 'react';

interface RowProps {
  children?: ReactNode;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

const Row: React.FC<RowProps> = ({ children, justify = 'flex-start' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: justify }}>
      {children}
    </div>
  );
};

export default Row;
