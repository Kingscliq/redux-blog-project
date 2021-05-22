import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ fetchUser, userId, user }) => {
  // Call fetch user action when component mounts
  useEffect(() => {
    // console.log(userId);
    fetchUser(userId);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
