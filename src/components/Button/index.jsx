import React from "react";
import "./style.scss";

const Button = (props) => {
  const btnType = props.outline ? "outline-" + props.color : props.color;
  const rounded = props.rounded ? "btn-rounded" : "";
  const classNames = `btn btn-${btnType} ${rounded} ` + props.className;
  return <button className={classNames}>{props.children}</button>;
};

export default Button;
