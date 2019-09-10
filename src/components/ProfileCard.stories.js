import { action } from "@storybook/addon-actions";
import { withKnobs, object, number } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import React from "react";
import users from "../assets/users";
import ProfileCard from "./ProfileCard";

export const actions = {
  onAddFriend: action("onAddFriend"),
  onRemoveFriend: action("onRemoveFriend"),
  onViewProfile: linkTo("User Profile Screen", "Default"),
  onMessage: action("onMessage")
};

const options = {
  range: true,
  min: 0,
  max: 7,
  step: 1
};

storiesOf("Molecules/Profile Card", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Friend", () => (
    <ProfileCard
      user={users[number("user", 0, options)]}
      {...actions}
      friendStatus="USER_IS_FRIEND"
    />
  ))
  .add("Stranger", () => (
    <ProfileCard
      user={users[number("user", 0, options)]}
      {...actions}
      friendStatus="USER_NOT_FRIEND"
    />
  ))
  .add("No Picture", () => (
    <ProfileCard
      user={{ ...users[number("user", 0, options)], picture: "" }}
      {...actions}
      friendStatus="USER_NOT_FRIEND"
    />
  ))
  // .add("Long Name", () => (
  //   <ProfileCard
  //     user={{
  //       ...users[number("user", 0, options)],
  //       name: "Gustavo Ebenezer Hamilton Wordsworth III"
  //     }}
  //     {...actions}
  //     friendStatus="USER_NOT_FRIEND"
  //   />
  // ))
  .add("Editable", () => (
    <ProfileCard
      user={object("task", { ...users[0] })}
      {...actions}
      friendStatus="USER_NOT_FRIEND"
    />
  ));
