import React from "react";
import Header from "../components/General/Header";
import FriendList from "../components/ProfileFriends/FriendList";
import { connect } from "react-redux";
import SearchedUsers from "../components/SearchedUsers/SearchedUsers";

const ProfileFriends = (props) => {
  const { searchedUsers } = props;

  return (
    <div>
      <Header />
      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {(searchedUsers == [] ||
        searchedUsers == undefined ||
        searchedUsers.length == 0) && <FriendList />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFriends);
