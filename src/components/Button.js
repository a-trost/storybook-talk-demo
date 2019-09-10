import React from "react";

export default ({
  color,
  action,
  size = "medium",
  type = "solid",
  children
}) => (
  <button
    className={`button button--${color} button--${size} button--${type}`}
    onClick={action}
  >
    {children}
  </button>
);
