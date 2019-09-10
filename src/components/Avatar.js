import React from "react";

export default ({ picture, name, size }) => (
  <div className={`avatar avatar--${size}`}>
    {picture ? (
      <img className="avatar__image" src={picture} alt={name} />
    ) : (
      <div className="avatar__letter-background">
        <span className="avatar__letter">{name[0]}</span>
      </div>
    )}
  </div>
);
