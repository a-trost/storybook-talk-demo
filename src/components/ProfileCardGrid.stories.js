import { withKnobs } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import React from "react";
import users from "../assets/users";
import ProfileCardGrid from "./ProfileCardGrid";

export const actions = {
  onAddFriend: action("onAddFriend"),
  onRemoveFriend: action("onRemoveFriend"),
  onViewProfile: linkTo("User Profile Screen", "Default"),

  onMessage: action("onMessage")
};

const options = {
  range: true,
  min: 1,
  max: 24,
  step: 1
};

storiesOf("Profile Card Grid", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Not Friends", () => (
    <>
      <ProfileCardGrid
        {...actions}
        friendStatus="USER_NOT_FRIEND"
        users={[...users, ...users, ...users].slice(
          0,
          number("user count", 4, options)
        )}
      />
    </>
  ))
  .add("Friends", () => (
    <>
      <ProfileCardGrid
        {...actions}
        friendStatus="USER_IS_FRIEND"
        users={[...users, ...users, ...users].slice(
          0,
          number("user count", 4, options)
        )}
      />
    </>
  ));
