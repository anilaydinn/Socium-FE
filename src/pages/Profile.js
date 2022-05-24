import React from "react";
import Header from "../components/General/Header";
import ProfileContent from "../components/Profile/ProfileContent";
import { connect } from "react-redux";
import SearchedUsers from "../components/SearchedUsers/SearchedUsers";

const Profile = (props) => {
  const { searchedUsers } = props;

  return (
    <div>
      <Header />
      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {!searchedUsers && <ProfileContent />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
