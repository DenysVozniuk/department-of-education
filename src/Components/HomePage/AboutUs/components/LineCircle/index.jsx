import React from "react";

function LineCircle(props) {
    const { rotate, lineWidth } = props;
    const circleLeft = lineWidth;
  return (
    <div className="line-circle" style={{transform: `rotate(${rotate}deg)`}}>
        <div className="line" style={{width: `${lineWidth}px`}}></div>
        <div className="circle" style={{left: `${circleLeft}px`}}></div>
    </div>
  );
}

export default LineCircle;
