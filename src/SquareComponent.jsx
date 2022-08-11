import React from 'react';

function SquareComponent(props) {

    const classes = props.className ? `${props.className} square` : 'square';
    const states = props.state;
    const clicked = props.onClick;

  return (
    <span className={classes} onClick={clicked}>
        {states}
    </span>
  );
}

export default SquareComponent;
