import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function () {
  useEffect(() => {
    scroll.scrollToTop({
      delay: 0,
      duration: 1000,
      smooth: true,
    });
  });

  return null;
}
