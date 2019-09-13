
import React, { Component } from 'react';
import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  container: {
    width: '100%',
  },
});

class Sticky extends Component {
  state = {
    current: false,
    frameId: 0,
    height: 0,
    maxBottom: false,
    maxLeft: false,
    maxRight: false,
    maxTop: false,
    parentDimensions: null,
    stickyDiv: React.createRef(),
    stickyDivDimensions: null,
    stickyRect: null,
    width: 0,
  }

  componentDidMount() {
    this.addEvents();
    this.handleScroll();

    // scroll top()
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scrollTarget !== this.props.scrollTarget) {
      this.removeEvents();
      this.addEvents();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  setSticky = (active) => {
    const { onStickyChange } = this.props;
    const { current } = this.state;

    if (active !== current) {
      this.setState({
        current: active,
      });

      onStickyChange(active);
    }
  }

  addEvents = () => {
    const { stickyDiv } = this.state;
    const scrollTarget = this.props.scrollTarget || window;

    if (scrollTarget && stickyDiv.current) {
      scrollTarget.addEventListener('scroll', this.debouncedScroll);
      window.addEventListener('resize', this.updateDimensions);
    }
  }

  removeEvents() {
    const { frameId } = this.state;
    const scrollTarget = this.props.scrollTarget || window;

    if (scrollTarget) {
      scrollTarget.removeEventListener('scroll', this.debouncedScroll);
      window.removeEventListener('resize', this.updateDimensions);
    }

    if (frameId) {
      cancelAnimationFrame(frameId);
    }
  }

  debouncedScroll = () => {
    const { frameId } = this.state;

    if (!frameId) {
      this.setState({
        frameId: requestAnimationFrame(this.handleScroll),
      });
    }
  }

  updateDimensions = () => {
    // resize handler!
    window.scrollTo(0, 0);
    // update force: new ref dimensions.
    this.handleScroll('reload');
    this.render();
  }

  handleScroll = (handle) => {
    const { sides, stickyRef } = this.props;
    const { stickyDiv, height, width, stickyDivDimensions } = this.state;
    const stickyIns = stickyDiv.current || null;
    const stickyRefIns = stickyRef.current || null;
    const scrollTarget = this.props.scrollTarget || window;
    let { stickyRect } = this.state;

    this.setState({
      frameId: 0,
    });

    if (!stickyIns || !stickyRefIns) {
      return;
    }

    // scrollTarget is the window
    const scrollRect = scrollTarget.getBoundingClientRect ? scrollTarget.getBoundingClientRect() : {
      bottom: 0,
      height: scrollTarget.innerHeight,
      left: 0,
      right: 0,
      top: 0,
      width: scrollTarget.innerWidth,
      x: scrollTarget.scrollX,
      y: scrollTarget.scrollY,
    };

    stickyRect = stickyIns.getBoundingClientRect();

    if (!height || !width) {
      this.setState({
        height: stickyRect.height,
        width: stickyRect.height,
      });
    }

    stickyRect = {
      // Apparently you can't spread the results of a bounding client rectangle
      height: height || stickyRect.height,
      width: width || stickyRect.width,
      x: stickyRect.x,
      y: stickyRect.y,
    };

    let maxBottom = null;
    let maxLeft = null;
    let maxRight = null;
    let maxTop = null;

    if (typeof sides.top === 'number') {
      maxTop = stickyRect.y < scrollRect.top + stickyRefIns.offsetTop;
      this.setState({ maxTop });
    }

    if (typeof sides.left === 'number') {
      maxLeft = stickyRect.x < scrollRect.left + stickyRefIns.x;
      this.setState({ maxLeft });
    }

    if (typeof sides.bottom === 'number') {
      maxBottom = stickyRect.y + stickyRect.height > (scrollRect.height + scrollRect.top) - sides.bottom;
      this.setState({ maxBottom });
    }

    if (typeof sides.right === 'number') {
      maxRight = stickyRect.x + stickyRect.width > (scrollRect.width + scrollRect.left) - sides.right;
      this.setState({ maxRight });
    }

    if (!stickyDivDimensions || handle === 'reload') {
      this.setState({
        parentDimensions: stickyRefIns,
        stickyDivDimensions: stickyIns.getBoundingClientRect(),
      });
    }

    if (maxBottom || maxLeft || maxRight || maxTop) {
      this.setSticky(true);
    } else {
      this.setSticky(false);
    }
  }

  props: {
    children: Object,
    classes: Object,
    onStickyChange: Function,
    scrollTarget: Object,
    sides: Object,
    stickyRef: Object,
  }

  render = () => {
    const {
      children,
      classes,
    } = this.props;

    const {
      maxBottom,
      maxLeft,
      maxRight,
      maxTop,
      parentDimensions,
      stickyDiv,
      stickyDivDimensions,
    } = this.state;

    let sticky = false;

    if (maxBottom || maxLeft || maxRight || maxTop) {
      sticky = true;
    }

    return (
      <div className={classes.container} ref={stickyDiv}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            child: stickyDivDimensions,
            limits: parentDimensions,
            modifiers: {
              bottom: maxBottom,
              left: maxLeft,
              right: maxRight,
              top: maxTop,
            },
            sticky,
          });
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Sticky);
