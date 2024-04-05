import React, { useState, useEffect, ReactNode } from 'react';

interface ResponsiveProps {
  desktopView: ReactNode;
  padView: ReactNode;
  mobileView: ReactNode;
}


/**
 * Description placeholder
 * @date 2024/4/5 - 12:27:34
 *
 * @param {{ desktopView: any; padView: any; mobileView: any; }} param0
 * @param {*} param0.desktopView
 * @param {*} param0.padView
 * @param {*} param0.mobileView
 * @returns {*}
 */
const Responsive: React.FC<ResponsiveProps> = ({ desktopView, padView, mobileView }) => {
  // Define screen size breakpoints
  const breakpoints = {
    mobile: 480,
    pad: 768,
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine which view to render based on the window width
  const getView = () => {
    if (windowWidth >= breakpoints.pad) {
      return desktopView;
    } else if (windowWidth >= breakpoints.mobile) {
      return padView;
    } else {
      return mobileView;
    }
  };

  return (
    <div>
      {getView()}
    </div>
  );
};

export default Responsive;
