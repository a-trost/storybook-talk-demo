import React from "react";

export default ({ picture, name, size }) => (
  <div className={`avatar avatar--${size}`}>
    <div className="avatar__letter-background">
      {picture ? (
        <img
          className={`avatar__image avatar__image--${size}`}
          src={picture}
          alt={name[0]}
        />
      ) : (
        <span>{name[0]}</span>
      )}
    </div>
  </div>
);
