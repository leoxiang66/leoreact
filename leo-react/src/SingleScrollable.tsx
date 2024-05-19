import React, { useRef, useEffect, ReactNode } from 'react';

interface SingleScrollableProps {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
}

const SingleScrollable: React.FC<SingleScrollableProps> = ({ children, direction = 'vertical' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const isScrolledToBottom =
        scrollContainer &&
        Math.ceil(scrollContainer.scrollTop + scrollContainer.clientHeight) >= scrollContainer.scrollHeight;

      if (isScrolledToBottom && event.deltaY > 0) {
        // 如果已经滚动到底部并且还在向下滚动，则阻止滚动
        return;
      }

      scrollContainer?.scrollBy({
        [direction === 'vertical' ? 'top' : 'left']: event.deltaY,
        behavior: 'smooth',
      });
    };

    scrollContainer?.addEventListener('wheel', handleWheel);

    return () => {
      scrollContainer?.removeEventListener('wheel', handleWheel);
    };
  }, [direction]);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        overflow: 'auto',
        [direction === 'vertical' ? 'overflowY' : 'overflowX']: 'scroll',
        [direction === 'vertical' ? 'overflowX' : 'overflowY']: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default SingleScrollable;