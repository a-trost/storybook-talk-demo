import React from "react";
import Button from "./Button";
import Avatar from "./Avatar";
import Card from "./Card";

export default ({
  onRemoveFriend,
  onAddFriend,
  onViewProfile,
  onMessage,
  friendStatus = "USER_NOT_FRIEND",
  user
}) => (
  <Card maxWidth="26rem">
    <div className="profile-card__inner">
      <div className="profile-card__row margin-bottom-1">
        <Avatar {...user} size="medium"></Avatar>
        <h3 className="profile-card__name">{user.name}</h3>
      </div>

      <div className="profile-card__row profile-card__row--middle margin-bottom-1">
        <p className="profile-card__description">
          {user && user.description && user.description.length > 100
            ? user.description.slice(0, 100) + "..."
            : user.description}
        </p>
      </div>
      <div className="profile-card__row profile-card__row--bottom">
        <Button
          color="grey"
          type="outline"
          action={() => onViewProfile(user.id)}
          size="small"
        >
          View Profile
        </Button>
        <Button
          color="grey"
          type="outline"
          action={() => onMessage(user.id)}
          size="small"
        >
          Message
        </Button>
        {friendStatus === "USER_IS_FRIEND" ? (
          <Button
            color="red"
            type="outline"
            action={() => onRemoveFriend(user.id)}
            size="small"
          >
            Remove Friend
          </Button>
        ) : (
          <Button
            color="green"
            action={() => onAddFriend(user.id)}
            size="small"
          >
            Add Friend
          </Button>
        )}
      </div>
    </div>
  </Card>
);
