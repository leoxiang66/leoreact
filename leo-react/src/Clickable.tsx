import React from 'react';

// 定义Clickable组件的props类型
interface ClickableProps {
  children: React.ReactNode; // 可以是任何有效的React子元素
  onClick: () => void; // onClick事件处理器是一个没有参数和返回值的函数
}


// 定义Clickable组件
/**
 * Description placeholder
 * @date 2024/4/9 - 18:38:27
 *
 * @param {{ children: any; onClick: any; }} param0
 * @param {*} param0.children
 * @param {*} param0.onClick
 * @returns {*}
 */
const Clickable: React.FC<ClickableProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
};

export default Clickable;
