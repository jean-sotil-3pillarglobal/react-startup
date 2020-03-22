import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    scroll.scrollToTop({
      delay: 0,
      duration: 0,
      smooth: true,
    });
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;
