import React from "react";
import { connect } from "react-redux";
import FriendRequestList from "../components/FriendRequests/FriendRequestList";
import Header from "../components/General/Header";
import SearchedUsers from "../components/SearchedUsers/SearchedUsers";

const FriendRequests = (props) => {
  const { searchedUsers } = props;

  return (
    <div>
      <Header />
      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {(searchedUsers == [] ||
        searchedUsers == undefined ||
        searchedUsers.length == 0) && <FriendRequestList />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);
