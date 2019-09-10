import React from "react";
import ProfileCard from "./ProfileCard";

export default ({
  users,
  onAddFriend,
  onRemoveFriend,
  onMessage,
  onViewProfile,
  friendStatus
}) => (
  <div className="profile-card-grid">
    {users.map(user => (
      <ProfileCard
        key={user.id}
        onAddFriend={onAddFriend}
        onViewProfile={onViewProfile}
        onRemoveFriend={onRemoveFriend}
        onMessage={onMessage}
        user={user}
        friendStatus={friendStatus}
      ></ProfileCard>
    ))}
  </div>
);
