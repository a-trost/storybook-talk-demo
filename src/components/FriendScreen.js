import React from "react";
import ProfileCardGrid from "./ProfileCardGrid";

export default ({
  users,
  onAddFriend,
  onRemoveFriend,
  onMessage,
  onViewProfile,
  friendStatus
}) => (
  <div className="friend-screen">
    {friendStatus === "USER_NOT_FRIEND" ? (
      <>
        <h1>Find Friends</h1>
        <span className="friend-screen__subtitle">
          Make some new internet friends.
        </span>
      </>
    ) : (
      <>
        <h1>Your Friends</h1>
        <span className="friend-screen__subtitle">
          These are your internet friends.
        </span>
      </>
    )}
    <ProfileCardGrid
      onAddFriend={onAddFriend}
      onViewProfile={onViewProfile}
      onRemoveFriend={onRemoveFriend}
      onMessage={onMessage}
      users={users}
      friendStatus={friendStatus}
    ></ProfileCardGrid>
  </div>
);
