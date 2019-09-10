import React from "react";

export default ({ children, maxWidth = "unset" }) => (
  <div className={`card`} style={{ maxWidth }}>
    {children}
  </div>
);
