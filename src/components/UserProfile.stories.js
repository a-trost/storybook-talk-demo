import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import React from "react";

import UserProfile from "./UserProfile";

// An empty screen just to show the Storybook Links Addon

storiesOf("User Profile Screen", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Default", () => (
    <>
      <UserProfile />
    </>
  ));
