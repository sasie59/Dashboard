import React from "react";
import "./Power.scss";

export default function Power(props) {
  return (
    <div className="Power">
      <div className="number">Power {props.number}</div>
      <div className="space" />
      <div className="bar">
        <div className="grayLine">
          <div className="hotdog" style={{
            width: `${props.lv}%`,
            height: '100%'
            }}>
          </div>
        </div>
      </div>
    </div>
  );
}
