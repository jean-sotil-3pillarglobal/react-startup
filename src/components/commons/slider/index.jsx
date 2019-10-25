import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import classnames from 'classnames';
import React from 'react';

import {
  Paper,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    '&::-webkit-scrollbar': {
      width: 0,
    },
    backgroundColor: 'transparent',
    display: 'flex',
    overflowX: 'scroll',
    padding: `${theme.spacing(3)}px 0`,
    width: '100%',
  },
  item: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    border: `0 solid ${theme.palette.primary.main}`,
    flexShrink: 0,
  },
}));

function Slider (props: {
  className: Object,
  items: Array,
  onHover: Function,
}) {
  const {
    className,
    items,
  } = props;

  const classes = useStyles(props);

  const [effect, setEffect] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const clamp = (value: number, clampAt: number = 30) => {
    let result = 0;

    if (value > 0) {
      result = value > clampAt ? clampAt : value;
    } else {
      result = value < -clampAt ? -clampAt : value;
    }

    return result;
  };

  const bind = useScroll((event) => {
    const value = event.scrolling ? clamp(event.delta[0]) : 0;

    setEffect({
      transform: `perspective(500px) rotateY(${value}deg)`,
    });
  });

  const handleMouseEnter = (item) => {
    const {
      onHover,
    } = props;

    onHover({
      hover: true,
      id: item.id,
    });
  };

  const handleMouseLeave = () => {
    const {
      onHover,
    } = props;

    onHover({
      hover: false,
    });
  };

  return (
    <Paper
      className={classnames(classes.container, className)}
      elevation={0}
      {...bind()}>
      {items.map(item => (
        <animated.div
          key={item.id}
          className={classes.item}
          style={{
            ...effect,
            backgroundImage: `url(${item.image})`,
          }}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          {item.render()}
        </animated.div>
      ))}
    </Paper>
  );
}

export default Slider;
