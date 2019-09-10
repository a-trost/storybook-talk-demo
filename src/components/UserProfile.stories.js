import { storiesOf } from "@storybook/react";
import React from "react";

import UserProfile from "./UserProfile";

// An empty screen just to show the Storybook Links Addon

storiesOf("Pages/User Profile Screen", module)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Default", () => (
    <>
      <UserProfile />
    </>
  ));
