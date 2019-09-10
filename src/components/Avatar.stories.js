import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import React from "react";
import users from "../assets/users";
import Avatar from "./Avatar";

storiesOf("Atoms/Avatar", module)
  .addDecorator(withKnobs)
  .add("small", () => (
    <div className="row-of-items">
      <Avatar size="small" {...users[0]} />
      <Avatar size="small" name={users[0].name} picture="" />
    </div>
  ))
  .add("medium", () => (
    <div className="row-of-items">
      <Avatar size="medium" {...users[1]} />
      <Avatar size="medium" name={users[1].name} picture="" />
    </div>
  ))
  .add("large", () => (
    <div className="row-of-items">
      <Avatar size="large" {...users[2]} />
      <Avatar size="large" name={users[2].name} picture="" />
    </div>
  ));
