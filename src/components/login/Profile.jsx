import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../common/Loading";

import User from "../api/User";

function Profile() {
  const userDetails = useSelector((state) => state.user.userDetails);
  const { handleLogout } = User();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!userDetails) {
    return <Loading />;
  }

  return (
    <div className="ProfileContainer">
      <h1>Profile</h1>
      <div className="ProfileContentContainer">
        <img
          src={userDetails.avatar?.url}
          alt={userDetails.name}
          className="profileImage"
        />
        <h2>{userDetails.name}</h2>
        <p>Email: {userDetails.email}</p>
        <p>Role: {userDetails.role}</p>
        <p>Joined: {new Date(userDetails.createAt).toLocaleDateString()}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
